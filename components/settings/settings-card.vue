<script setup lang="ts">
const client = useSupabaseAuthClient()
const user = useSupabaseUser();
const logout = () => {
  client.auth.signOut()
  navigateTo('/login')
}
</script>

<template>
  <div
      class="w-4/5 md:w-3/4 h-fit my-2 bg-gradient-to-tl from-blue-900/40 to-pink-400/30 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg ">
    <div class="space-x-3 mx-5 my-2 text-center py-2 flex justify-center items-center">
      <button
          class=" w-fit bg-white/10 hover:bg-black/10 backdrop-filter backdrop-blur-3xl rounded-3xl bg-clip-padding px-4 py-2 ">
        <NuxtLink to="/settings" class="text-white">Settings</NuxtLink>
      </button>
      <button @click="logout"
          class=" w-fit bg-white/10 hover:bg-black/10 backdrop-filter backdrop-blur-3xl rounded-3xl bg-clip-padding px-4 py-2 ">
        Logout
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>