<script setup lang="ts">
const user = useSupabaseUser();
const client = useSupabaseAuthClient();
const userCredentials = ref({
  email: "",
  password: "",
})
const isLoading = ref(false)
const signIn = async () => {
  try {
    isLoading.value = true;
    const {data, error} = await client.auth.signInWithPassword({
      email: userCredentials.value.email,
      password: userCredentials.value.password,
    })
  }catch (e) {
    console.error(e);
  }
  isLoading.value = false;
}


</script>

<template>
  <form action="" class="flex flex-col space-y-5 w-full px-5">
    <input type="text" placeholder="user@domain.com" v-model="userCredentials.email"
           class=" text-lg rounded-md w-full h-10 bg-white/10 focus:bg-black/10 shadow-lg backdrop-filter backdrop-blur-lg p-4 focus:outline-none">
    <input placeholder="password" v-model="userCredentials.password"
           class="rounded-md w-full h-10 bg-white/10 focus:bg-black/10 shadow-lg backdrop-filter backdrop-blur-lg p-4 focus:outline-none"/>
    <div class="place-self-end space-x-3">
      <button type="reset"
              class="shadow-lg bg-white/10 hover:bg-black/10 backdrop-filter backdrop-blur-3xl rounded-3xl bg-clip-padding p-1 text-lg py-2 px-4"
              @click="$emit('back')">
        Back
      </button>
      <button type="reset"
              :disabled="isLoading"
              class="shadow-lg bg-white/10 hover:bg-black/10 backdrop-filter backdrop-blur-3xl rounded-3xl bg-clip-padding p-1 text-lg py-2 px-4 disabled:text-white/20 disabled:cursor-not-allowed"
              @click="signIn">
        <svg :class="{'inline': isLoading, 'hidden': !isLoading}" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
             xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        login
      </button>
    </div>
  </form>
</template>

<style scoped>

</style>