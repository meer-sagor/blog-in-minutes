<script setup lang="ts">

</script>

<template>
  <div class="bg-gray-100">
    <div class="container pt-space40 pb-space20">
      <div class="space-y-space32">
        <div class="sm:flex space-y-space12 sm:space-y-0 justify-between items-center">
          <NuxtImg src="https://izjqwzjbvtzaqsjrbyle.supabase.co/storage/v1/object/public/events//brand-logo.svg" height="50" width="107"/>
          <div>
            <p class="font-medium text-sm">Contact</p>
            <p class="text-sm text-gray-500 flex items-center gap-space12">
              <Icon name="lucide:mail" />
              <span>contact@eventsinminutes.com</span>
            </p>
            <p class="text-sm text-gray-500 flex items-center gap-space12">
              <Icon name="lucide:phone-call" />
              <span>+1 (628) 587-3235</span>
            </p>

          </div>
        </div>
        <div class="sm:flex justify-between items-center space-y-space12 sm:space-y-0 text-sm text-gray-500">
          <div class="flex items-center gap-space16">
            <p>Privacy Policy</p>
            <Icon name="lucide:dot" size="24"/>
            <p>Terms & Conditions</p>
          </div>
          <p>{{new Date().getFullYear()}} - &copy; All rights Reserved - Events In Minutes</p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>