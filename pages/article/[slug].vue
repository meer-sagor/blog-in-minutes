<script setup lang="ts">
const route = useRoute('article-slug')
const articleDetails = ref({
  id: Math.random().toString(),
  media: 'images/hero-section/hero-feature.jpeg',
  published_date: '08.08.2021',
  title: 'Top Trends in Corporate Event Design and Engagement',
  description: 'Progressively incentivize cooperative systems through\n' +
      'technically sound functionalities. Credibly productivate\n' +
      'seamless data with flexible schemas.',
  event_type: "EVENT PLANNING TIPS"
})
const articles = ref([
  {
    id: Math.random().toString(),
    media: 'images/hero-section/hero-feature.jpeg',
    published_date: '08.08.2021',
    title: 'Top Trends in Corporate Event Design and Engagement',
    description: 'Progressively incentivize cooperative systems through\n' +
        'technically sound functionalities. Credibly productivate\n' +
        'seamless data with flexible schemas.',
    event_type: "EVENT PLANNING TIPS"
  },
  {
    id: Math.random().toString(),
    media: 'images/hero-section/hero-feature.jpeg',
    published_date: '08.08.2021',
    title: 'Top Trends in Corporate Event Design and Engagement',
    description: 'Progressively incentivize cooperative systems through\n' +
        'technically sound functionalities. Credibly productivate\n' +
        'seamless data with flexible schemas.',
    event_type: "EVENT PLANNING TIPS"
  },
  {
    id: Math.random().toString(),
    media: 'images/hero-section/hero-feature.jpeg',
    published_date: '08.08.2021',
    title: 'Top Trends in Corporate Event Design and Engagement',
    description: 'Progressively incentivize cooperative systems through\n' +
        'technically sound functionalities. Credibly productivate\n' +
        'seamless data with flexible schemas.',
    event_type: "EVENT PLANNING TIPS"
  },
  {
    id: Math.random().toString(),
    media: 'images/hero-section/hero-feature.jpeg',
    published_date: '08.08.2021',
    title: 'Top Trends in Corporate Event Design and Engagement',
    description: 'Progressively incentivize cooperative systems through\n' +
        'technically sound functionalities. Credibly productivate\n' +
        'seamless data with flexible schemas.',
    event_type: "EVENT PLANNING TIPS"
  },
  {
    id: Math.random().toString(),
    media: 'images/hero-section/hero-feature.jpeg',
    published_date: '08.08.2021',
    title: 'Top Trends in Corporate Event Design and Engagement',
    description: 'Progressively incentivize cooperative systems through\n' +
        'technically sound functionalities. Credibly productivate\n' +
        'seamless data with flexible schemas.',
    event_type: "EVENT PLANNING TIPS"
  }
])
</script>

<template>
  <section class="grid grid-cols-12 gap-space20">
    <div class="col-span-12 md:col-span-9">
      <Card>
        <NuxtImg :src="articleDetails.media" height="280" class="rounded-[12px] w-full object-cover" />
        <Badge class="absolute top-0 right-space20" variant="secondary">{{articleDetails.event_type}}</Badge>
        <CardDescription>{{articleDetails.published_date}}</CardDescription>
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
          <NuxtImg :src="article.media" height="80" class="rounded-[8px] w-full object-cover" />
          <Badge class="absolute top-space5 right-space12" variant="secondary">{{article.event_type}}</Badge>
          <div class="p-space16">
            <CardDescription>{{article.published_date}}</CardDescription>
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