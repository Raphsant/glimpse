export default defineNuxtRouteMiddleware(() => {
    const user = useSupabaseUser()
    if (!user.value) {
        console.log("middleware triggered")
        return navigateTo('/login')
    }
})