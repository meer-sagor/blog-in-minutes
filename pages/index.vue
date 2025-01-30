<script setup lang="ts">
const supabase = useSupabaseClient()
const {data:articles, error, pending} = await useAsyncData('articles', async()=>{
  const {data} = await supabase.from('articles').select()
  return data
})
</script>

<template>
  <div class="space-y-space50">
    <HeroSection/>
    <div v-if="pending" class="grid grid-cols-12 gap-space12">
      <Card class="col-span-12 sm:col-span-6 md:col-span-4 p-space12" v-for="art in 5" :key="art">
        <Skeleton class="h-[280px] w-full rounded-xl" />
        <div class="space-y-2">
          <Skeleton class="h-4 w-[250px]" />
          <Skeleton class="h-4 w-[200px]" />
        </div>
      </Card>
    </div>
    <PopularArticles v-else :articles="articles ?? []"/>
  </div>
</template>

<style scoped>

</style>