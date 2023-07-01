<script setup lang="ts">
const {greeting} = useTimeGreeting();
const user = useSupabaseUser();
const username = user.value?.user_metadata.name
console.log(user.value)

</script>

<template>
<div class="text-3xl text-center font-nunito font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 my-5">
    {{greeting}}, {{username}}
</div>
</template>

<style scoped>

</style>