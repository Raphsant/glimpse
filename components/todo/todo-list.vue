<script setup>
//initialize subscription channel
let realtimeChannel
//Get both client and user from Supabase into scope
const client = useSupabaseClient()
const user = useSupabaseUser()
//State Variable
const todoList = ref("")
const completedList = ref("")
const isTodo = ref(true)


//Function that will fetch the todos from the database
const loadTodos = async () => {
  try {
    //fetching elements from 'todoTable'
    const {data: todo, refresh: loadTodos} = await useAsyncData('todo', async () => {
      //specify that we only need the rows that match our user ID
      const {data} = await client.from('todos').select().eq('user_id', user.value.id)
      //assign the value of the rows to the todoList
      todoList.value = data.filter(todo => todo.completed === false);
      completedList.value = data.filter(todo => todo.completed === true);
    })
  } catch (e) {
    console.error(e)
  }
}
const completeTodo = async (todo) => {
  await client.from('todos').update({completed: true}).match({id: todo.id})
}
//Functions to run on mount
onMounted(() => {
  //execute initial fetch
  loadTodos();
  //subscribe to any database changes, if anything changes in the specified table, the fetch function will rerun and update the view
  realtimeChannel = client.channel('todos').on('postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'todos'
      }, () => loadTodos())
  realtimeChannel.subscribe()
})
//unsubscribe whenever the component gets unmounted
onUnmounted(() => {
  realtimeChannel.unsubscribe();
})


</script>

<template>
  <div class="flex flex-col justify-start items-start w-full h-full">
    <div class="flex flex-row w-full h-1/2 items-center justify-center my-1 shadow-lg  rounded-lg font-light text-lg">
      <div @click="isTodo = !isTodo" :class="{'bg-white/20 h-full w-full rounded-l-lg text-center p-2 shadow-lg shadow-black/20': isTodo,'bg-black/30 h-full w-full rounded-l-lg text-center backdrop-blur-lg p-2 shadow-inner shadow-black/30': !isTodo}">To-do</div>
      <div @click="isTodo = !isTodo" :class="{'bg-white/20 h-full w-full rounded-r-lg text-center p-2 shadow-lg shadow-black/20': !isTodo,'bg-black/30 h-full w-full rounded-r-lg text-center backdrop-blur-lg p-2 shadow-inner shadow-black/30': isTodo}">Completed</div>
    </div>
    <ul class="" v-if="isTodo" v-for="todo in todoList">
      <li class="my-2 flex flex-col justify-center items-start">
        <button @click="completeTodo(todo)">
          <Icon name="bx:checkbox" class="text-pink-300/60" size="2rem"/>
          <span >{{ todo.title }}</span>
        </button>
        <div class="font-light italic text-gray-100/60 text-sm">
          {{ todo.description }}
        </div>
      </li>
    </ul>
    <ul class="" v-if="!isTodo" v-for="todo in completedList">
      <li class="my-2 flex flex-col justify-center items-start">
        <button @click="completeTodo(todo)">
          <Icon name="bx:checkbox-checked" class="text-pink-300/60" size="2rem"/>
          <span class="text-white/40 line-through">{{ todo.title }}</span>
        </button>
        <div class="font-light italic text-gray-400 text-sm line-through">
          {{ todo.description }}
        </div>
      </li>
    </ul>
    <button class="place-self-end mt-20" @click="$emit('toggleForm')">
      <Icon name="material-symbols:add"
            class="shadow-lg bg-white/10 hover:bg-black/10 backdrop-filter backdrop-blur-3xl rounded-3xl bg-clip-padding place-self-end p-1 "
            size="3rem"/>
    </button>
  </div>
</template>


<style scoped>

</style>