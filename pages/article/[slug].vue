<script setup lang="ts">
const route = useRoute('article-slug')
const supabase = useSupabaseClient()

const {data:articles} = await useAsyncData('related-aricle', async()=>{
  const {data} = await supabase.from('articles').select()
  return data
}, {
  lazy: true
})

const {data:articleDetails, error, pending} = await useAsyncData(`article-${route.params.slug}`, async()=>{
  const {data} = await supabase.from('articles').select().eq('id', route.params.slug).single()
  return data
})

const ogTitle = computed(()=> articleDetails.value?.title ?? 'Article Details')

useSeoMeta({
  title: ogTitle.value,
})

</script>

<template>
  <NuxtLink to="/" class="inline-flex items-center gap-space12 hover:bg-gray-200 p-space8 rounded-md mb-space16">
    <Icon name="lucide:arrow-left"/>
    Back
  </NuxtLink>

  <section class="grid grid-cols-12 gap-space20">
    <div class="col-span-12 md:col-span-9">
      <div v-if="pending" class="w-full">
        <Card class="p-space12">
          <Skeleton class="h-[280px] w-full rounded-xl" />
          <div class="space-y-2">
            <Skeleton class="h-4 w-[250px]" />
            <Skeleton class="h-4 w-[200px]" />
          </div>
        </Card>
      </div>
      <Card v-if="!pending && articleDetails" class="border-none">
        <NuxtImg :src="articleDetails.media" height="280" class="rounded-[12px] h-[280px] w-full object-cover" />
        <Badge variant="secondary">{{articleDetails.event_type}}</Badge>
        <CardDescription>{{formatDate(articleDetails.created_at)}}</CardDescription>
        <CardHeader>
          <CardTitle class="leading-[25.6px]">{{articleDetails.title}}</CardTitle>
        </CardHeader>
        <CardContent>
          {{articleDetails.description}}
        </CardContent>
      </Card>
    </div>
    <aside class="col-span-12 md:col-span-3 space-y-space16">
      <h3 class="text-[24px] font-bold leading-[33.6px]">Related Article</h3>
      <NuxtLink v-for="(article, i) in articles" :key="i" :to="{
        name: 'article-slug',
        params: {
          slug: article.id
        }
      }" class="relative block">
        <Card class="space-y-space5 border rounded-md ">
          <NuxtImg :src="article.media" height="80" class="rounded-[8px] w-full h-[184px] object-cover" />
          <Badge class="absolute top-space5 right-space12" variant="secondary">{{article.event_type}}</Badge>
          <div class="p-space16 pt-0">
            <CardDescription>{{formatDate(article.created_at)}}</CardDescription>
            <CardHeader>
              <CardTitle class="leading-[25.6px]">{{article.title}}</CardTitle>
            </CardHeader>
            <CardContent>
              {{article.description}}
            </CardContent>
          </div>
        </Card>
      </NuxtLink>
    </aside>
  </section>
</template>

<style scoped>

</style>