<script setup lang="ts">
definePageMeta({alias: ['/'],})
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
  <ion-page>
    <div class="flex flex-col h-screen overflow-y-auto">
      <IntroHeader/>
      <div class="flex flex-col font-nunito justify-center items-center md:grid md:grid-cols-2 w-full md:w-1/2 ">
        <ClockCard/>
        <WeatherCard/>
        <TodoCard/>
        <button @click="logout">Logout</button>
      </div>
    </div>
  </ion-page>
</template>

<style scoped>

</style>