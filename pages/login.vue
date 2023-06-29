<script setup lang="ts">
const user = useSupabaseUser();
const client = useSupabaseAuthClient();
const router = useRouter();

const login = async (provider: 'discord') => {
  const {error } = await client.auth.signInWithOAuth({
    provider: 'discord',
  })
  if (error) {
    return alert('something went wrong!')
  }
}
watchEffect(() => {
  if (user.value) {
    navigateTo('/')
  }
})
</script>

<template>
  <div class="cursor-pointer flex justify-center items-center h-screen w-full" @click="login('discord')">
    <div class="backdrop-blur-xl bg-gradient-to-tl from-blue-900/20 to-pink-400/20 w-3/4 h-1/6 flex justify-center items-center rounded-lg font-nunito font-light text-2xl">
     Login with Discord
    </div>
  </div>
</template>

<style scoped>

</style>