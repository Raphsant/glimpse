<script setup>
const isLoading = ref(false)
const user = useSupabaseUser();
const client = useSupabaseAuthClient();
const username = user.value?.user_metadata.name
const city = user.value?.user_metadata.city
const userField = ref(username)
const cityField = ref(city)

const updateData = async () => {
  isLoading.value = true;
  try {
    const {data} = await client.auth.updateUser({
      data: {
        name: userField.value,
        city: cityField.value
      }
    })
    isLoading.value = false;
    navigateTo('/')

  } catch (e) {
    console.error(e)
  }
}

</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div
        class="flex justify-center items-center w-4/5 md:w-3/4 h-fit my-2 bg-gradient-to-tl from-blue-900/40 to-pink-400/30 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg ">
      <div class="flex-col flex justify-center items-center w-full m-3 items-start py-5 my-10 text-white gap-5 ">
        <form action="" class="flex flex-col space-y-5 w-full px-5">
          <input type="text" placeholder="user" v-model="userField"
                 class=" text-lg rounded-md w-full h-10 bg-white/10 focus:bg-black/10 shadow-lg backdrop-filter backdrop-blur-lg p-4 focus:outline-none">
          <input type="text" placeholder="City" v-model="cityField"
                 class=" text-lg rounded-md w-full h-10 bg-white/10 focus:bg-black/10 shadow-lg backdrop-filter backdrop-blur-lg p-4 focus:outline-none">
          <div class="place-self-end space-x-3">
            <NuxtLink to="/"

                    class="shadow-lg text-white bg-white/10 hover:bg-black/10 backdrop-filter backdrop-blur-3xl rounded-3xl bg-clip-padding p-1 text-lg py-2 px-4"
            >Back
            </NuxtLink>
            <button type="reset"
                    :disabled="isLoading"
                    class="shadow-lg bg-white/10 hover:bg-black/10 backdrop-filter backdrop-blur-3xl rounded-3xl bg-clip-padding p-1 text-lg py-2 px-4 disabled:text-white/20 disabled:cursor-not-allowed"
                    @click="updateData">
              <svg :class="{'inline': isLoading, 'hidden': !isLoading}"
                   class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                   xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Edit
            </button>

          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>