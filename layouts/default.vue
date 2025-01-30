<script setup lang="ts">
useSeoMeta({
  title: 'Event in Minutes',
  description: 'Welcome to our Ideas Hub, where we share tips. trends and inspiration for unforgettable events.',
  ogTitle: 'Events in Minutes Ideas',
  ogDescription: 'Welcome to our Ideas Hub, where we share tips. trends and inspiration for unforgettable events.',
  ogImage: 'https://izjqwzjbvtzaqsjrbyle.supabase.co/storage/v1/object/public/events//hero-feature.jpeg',
  ogUrl: 'https://blog-in-minutes.netlify.app',
  twitterTitle: 'Events in Minutes Ideas',
  twitterDescription: 'Welcome to our Ideas Hub, where we share tips. trends and inspiration for unforgettable events.',
  twitterImage: 'https://izjqwzjbvtzaqsjrbyle.supabase.co/storage/v1/object/public/events//hero-feature.jpeg',
  twitterCard: 'summary'
})
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>

<template>
  <AppHeader/>
<!--  mt-[125px]-->
  <div class="container my-space50">
    <slot></slot>
  </div>
  <AppFooter/>

</template>

<style scoped>

</style>