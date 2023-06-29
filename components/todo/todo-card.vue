<script setup>

const showForm = ref(true)

</script>

<template>
    <div class="w-4/5 md:w-3/4 h-fit my-2 bg-gradient-to-tl from-blue-900/40 to-pink-400/30 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg">
        <div class="flex-col flex justify-between items-center my-5 text-white mx-5">
            <TodoList :class="{'hidden': !showForm}" class="duration-2000 ease-out transition transform origin-top-right" @toggle-form="showForm = !showForm"/>
            <TodoForm :class="{'hidden': showForm}" class="duration-2000 ease-out transition transform origin-top-right" @toggle-form="showForm = !showForm"/>
        </div>
    </div>
</template>

<style scoped>

</style>