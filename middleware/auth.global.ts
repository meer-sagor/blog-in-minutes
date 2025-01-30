export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser()

    // If the route starts with 'dashboard' and the user is not logged in, redirect to login
    if (to.path.startsWith('/dashboard') && !user.value) {
        return navigateTo('/auth');
    }
})
