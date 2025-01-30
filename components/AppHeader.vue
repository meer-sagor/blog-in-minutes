<script setup lang="ts">
const user = useSupabaseUser()
const supabase = useSupabaseClient()


const signOut = async () => {
  const {  error } = await supabase.auth.signOut()
  reloadNuxtApp()
  if (error) console.log(error)
}
</script>

<template>
<!--  fixed top-0 left-0 right-0 z-[100] bg-white-->
  <header class="shadow py-[16px]">
    <div class="container flex justify-between items-center">
      <div class="flex items-center gap-space16">
        <NuxtLink to="/">
          <NuxtImg src="https://izjqwzjbvtzaqsjrbyle.supabase.co/storage/v1/object/public/events//brand-logo.svg" height="50" width="107"/>
        </NuxtLink>
        <NuxtLink to="tel:+1 (628) 587-3235" class="hidden sm:flex items-center gap-space20 text-sm">
          <span class="flex justify-center items-center size-space24 hover:bg-gray-300 hover:rounded-full transition rounded-full">
          <Icon name="lucide:phone-call" />
          </span>
          +1 (628) 587-3235
        </NuxtLink>
      </div>
      <nav class="flex items-center gap-space16">
        <p class="hidden sm:block px-space12 py-space8 cursor-pointer hover:bg-gray-300 hover:rounded-full transition rounded-full font-semibold ">Top Vendors, Apply Now!</p>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div class="flex items-center py-space12 px-space20 rounded-full gap-space8 bg-gray-100  ">
              <Icon name="lucide:menu" class="text-[30px]" />
              <div class="bg-white size-[40px] rounded-full flex items-center justify-center">
                <Icon name="lucide:user-round" class="text-[30px]"/>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem class="cursor-pointer" v-if="!user" @click="navigateTo('/auth')">Login</DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer" v-else @click="navigateTo('/dashboard')">Profile</DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer" v-if="user"  @click="signOut">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </div>
  </header>
</template>

<style scoped>

</style>