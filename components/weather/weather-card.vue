<script setup>
const temperature = ref(0)
const description = ref("Loading...")
const city = ref("")
const config = useRuntimeConfig()
console.log(config)
const getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=41.878113&lon=-87.629799&appid=${config.public.owaKey}`
    try {
        const weatherData = await useFetch(url);
        temperature.value = Math.round(weatherData.data.value.main.temp)
        description.value = weatherData.data.value.weather[0].description
        city.value = weatherData.data.value.name;

    } catch (e) {
        console.error(e)
    }
}
onMounted(getWeather)

</script>

<template>
    <div class="flex-col flex justify-center items-center w-4/5 md:w-3/4 h-full my-2 bg-gradient-to-tl from-white/10 to-pink-400/10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg">
        <div class="flex-col flex justify-between items-center py-5 my-10 text-white gap-5 w-fit p-10 rounded-md  h-full">
            <div class="text-4xl font-light ">{{ city }}</div>
            <div class="text-5xl">{{ temperature }}°</div>
            <div class="font-extralight">{{ description }}</div>
        </div>
    </div>

</template>

<style scoped>

</style>