<script setup lang="ts">

const client = useSupabaseClient()
const user = useSupabaseUser()
const todoTitle = ref("");
const todoDescription = ref("");
async function addTask() {
  event.preventDefault();
  const {data} = await client.from('todos')
      .upsert({
        author_id: user.value.id,
        title: todoTitle.value,
        description: todoDescription.value,
        completed: false
      })
  todoTitle.value = "";
  todoDescription.value = "";
}

</script>

<template>
  <form action="" class="flex flex-col space-y-5 w-full px-5">
    <input type="text" placeholder="Add a new item" v-model="todoTitle"
           class="rounded-md w-full h-10 bg-white/10 focus:bg-black/10 shadow-lg backdrop-filter backdrop-blur-lg p-4 focus:outline-none">
    <textarea placeholder="Description..." v-model="todoDescription"
              class="rounded-md w-full h-36 bg-white/10 focus:bg-black/10 shadow-lg backdrop-filter backdrop-blur-lg p-4 focus:outline-none"/>
    <div class="place-self-end space-x-3">
      <button type="reset" @click="$emit('toggleForm')" class="shadow-lg bg-white/10 hover:bg-black/10 backdrop-filter backdrop-blur-3xl rounded-3xl bg-clip-padding px-5 py-3">
        Cancel
      </button>
      <button type="reset"  @click="addTask">
        <Icon name="material-symbols:add"
              class="shadow-lg bg-white/10 hover:bg-black/10 backdrop-filter backdrop-blur-3xl rounded-3xl bg-clip-padding p-1"
        size="3rem"/>
      </button>

    </div>
  </form>
</template>

<style scoped>

</style>
//$emit('toggleForm')"