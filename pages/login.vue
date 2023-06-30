<script setup lang="ts">
import SignupForm from "~/components/login/signup-form.vue";

const user = useSupabaseUser();
const client = useSupabaseAuthClient();
const router = useRouter();
const email = ref('');
const password = ref('');

const isLoggingIn = ref(false);
const isSigningUp = ref(false);

watchEffect(() => {
  if (user.value) {
    navigateTo('/')
  }
})
</script>

<template>
  <div class="flex justify-center items-center h-screen w-full p-4">
    <div
        class=" backdrop-blur-xl bg-gradient-to-tl from-blue-900/20 to-pink-400/20  w-full h-3/5 flex justify-center items-center rounded-lg font-nunito font-light text-2xl">

      <div v-if="!isLoggingIn && !isSigningUp" class="w-full flex flex-row items-center justify-center space-x-10">
        <button @click="isSigningUp = !isSigningUp" type="reset"
                class="shadow-lg bg-white/10 hover:bg-black/10 backdrop-filter backdrop-blur-3xl rounded-3xl bg-clip-padding p-1 text-lg py-2 px-4 w-fit"
        >
          Sign up
        </button>
        <button @click="isLoggingIn = !isLoggingIn" type="reset"
                class="shadow-lg bg-white/10 hover:bg-black/10 backdrop-filter backdrop-blur-3xl rounded-3xl bg-clip-padding p-1 text-lg py-2 px-4 w-fit"
        >
          Sign in
        </button>
      </div>

      <LoginForm v-if="isLoggingIn" @back="isLoggingIn = !isLoggingIn"/>
      <SignupForm v-if="isSigningUp" @back="isSigningUp = !isSigningUp"/>
    </div>
  </div>
</template>

<style scoped>

</style>

//@click="login('discord')"
//@click="login('discord')"

<!--<SignupForm/>-->
