export default defineNuxtRouteMiddleware(async() => {
    // const user = useSupabaseUser()
    const {auth} =useSupabaseAuthClient()
    const user = await auth.getUser()
    if (!user) {
        console.log("middleware triggered")
        return navigateTo('/login')
    }
})