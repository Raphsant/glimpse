<script setup lang="ts">
import {useCurrentTime} from "~/composables/useCurrentTime";

const {currentTime} = useCurrentTime();
</script>

<template>
  <div
      class="w-4/5 md:w-3/4 h-fit my-2 bg-gradient-to-tl from-blue-900/20 to-pink-400/20 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg">
    <div class="flex-col flex justify-between items-center my-5 text-white gap-5 ">
      <div class="font-extralight text-2xl">{{ currentTime.toLocaleString('en-US', {weekday: "long"}) }}</div>
      <div class="text-3xl">{{ currentTime.toLocaleTimeString() }}</div>
      <div class="font-extralight text-2xl">{{ currentTime.toLocaleDateString() }}</div>
    </div>
  </div>
</template>

<style scoped>

</style>