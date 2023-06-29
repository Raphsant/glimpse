<script setup lang="ts">
const {greeting} = useTimeGreeting();
const user = useSupabaseUser();
const username = user.value?.user_metadata.full_name


</script>

<template>
<div class="text-3xl font-nunito font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 my-5">
    {{greeting}}, {{username}}
</div>
</template>

<style scoped>

</style>