<script setup>
const temperature = ref(0)
const description = ref("Loading...")
const city = ref("")
const config = useRuntimeConfig()
const user = useSupabaseUser();
const userCity = user.value?.user_metadata.city
let lat;
let lon;
const getWeather = async () => {
    try {

        const geoLocator = await useFetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userCity}&limit=1&appid=${config.public.owaKey}`)
        if (!geoLocator)
          return;
        lat = geoLocator.data.value[0].lat
        lon = geoLocator.data.value[0].lon
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.public.owaKey}`
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
    <div class="flex-col flex justify-center items-center w-4/5 md:w-3/4 h-fit my-2 bg-gradient-to-tl from-white/10 to-pink-400/10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg">
        <div class="flex-col flex justify-center items-center my-2 text-white w-fit rounded-md">
            <div class="text-xl font-extralight ">{{ city }}</div>
            <div class="text-3xl">{{ temperature }}°</div>
            <div class="font-extralight text-xl">{{ description }}</div>
        </div>
    </div>

</template>

<style scoped>

</style>