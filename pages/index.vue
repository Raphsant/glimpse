<script setup lang="ts">
definePageMeta({  middleware: 'auth'})
import ClockCard from "~/components/clock/clock-card.vue";
const client = useSupabaseAuthClient()
const user = useSupabaseUser();
const logout = () => {
  client.auth.signOut()
  navigateTo('/login')
}

watchEffect(() => {
  if (!user.value) {
    navigateTo('/login')
  }
})

</script>
<template>
  <div class="flex flex-col items-center justify-center ">
    <IntroHeader/>
    <div class="flex flex-col font-nunito justify-center items-center md:grid md:grid-cols-2  w-full md:w-1/2">
      <ClockCard/>
      <WeatherCard/>
      <TodoCard/>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<style scoped>

</style>