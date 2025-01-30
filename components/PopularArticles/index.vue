<script setup lang="ts">
// const articles = ref([
//     {
//       id: Math.random().toString(),
//   media: 'images/hero-section/hero-feature.jpeg',
//   published_date: '08.08.2021',
//   title: 'Top Trends in Corporate Event Design and Engagement',
//   description: 'Progressively incentivize cooperative systems through\n' +
//       'technically sound functionalities. Credibly productivate\n' +
//       'seamless data with flexible schemas.',
//       event_type: "EVENT PLANNING TIPS"
// },
//   {
//     id: Math.random().toString(),
//     media: 'images/hero-section/hero-feature.jpeg',
//     published_date: '08.08.2021',
//     title: 'Top Trends in Corporate Event Design and Engagement',
//     description: 'Progressively incentivize cooperative systems through\n' +
//         'technically sound functionalities. Credibly productivate\n' +
//         'seamless data with flexible schemas.',
//     event_type: "EVENT PLANNING TIPS"
//   },
//   {
//     id: Math.random().toString(),
//     media: 'images/hero-section/hero-feature.jpeg',
//     published_date: '08.08.2021',
//     title: 'Top Trends in Corporate Event Design and Engagement',
//     description: 'Progressively incentivize cooperative systems through\n' +
//         'technically sound functionalities. Credibly productivate\n' +
//         'seamless data with flexible schemas.',
//     event_type: "EVENT PLANNING TIPS"
//   },
//   {
//     id: Math.random().toString(),
//     media: 'images/hero-section/hero-feature.jpeg',
//     published_date: '08.08.2021',
//     title: 'Top Trends in Corporate Event Design and Engagement',
//     description: 'Progressively incentivize cooperative systems through\n' +
//         'technically sound functionalities. Credibly productivate\n' +
//         'seamless data with flexible schemas.',
//     event_type: "EVENT PLANNING TIPS"
//   },
//   {
//     id: Math.random().toString(),
//     media: 'images/hero-section/hero-feature.jpeg',
//     published_date: '08.08.2021',
//     title: 'Top Trends in Corporate Event Design and Engagement',
//     description: 'Progressively incentivize cooperative systems through\n' +
//         'technically sound functionalities. Credibly productivate\n' +
//         'seamless data with flexible schemas.',
//     event_type: "EVENT PLANNING TIPS"
//   },
//   {
//     id: Math.random().toString(),
//     media: 'images/hero-section/hero-feature.jpeg',
//     published_date: '08.08.2021',
//     title: 'Top Trends in Corporate Event Design and Engagement',
//     description: 'Progressively incentivize cooperative systems through\n' +
//         'technically sound functionalities. Credibly productivate\n' +
//         'seamless data with flexible schemas.',
//     event_type: "EVENT PLANNING TIPS"
//   },
//   {
//     id: Math.random().toString(),
//     media: 'images/hero-section/hero-feature.jpeg',
//     published_date: '08.08.2021',
//     title: 'Top Trends in Corporate Event Design and Engagement',
//     description: 'Progressively incentivize cooperative systems through\n' +
//         'technically sound functionalities. Credibly productivate\n' +
//         'seamless data with flexible schemas.',
//     event_type: "PLANNING TIPS"
//   },
//   {
//     id: Math.random().toString(),
//     media: 'images/hero-section/hero-feature.jpeg',
//     published_date: '08.08.2021',
//     title: 'Top Trends in Corporate Event Design and Engagement',
//     description: 'Progressively incentivize cooperative systems through\n' +
//         'technically sound functionalities. Credibly productivate\n' +
//         'seamless data with flexible schemas.',
//     event_type: "EVENT PLANNING TIPS"
//   },
//   {
//     id: Math.random().toString(),
//     media: 'images/hero-section/hero-feature.jpeg',
//     published_date: '08.08.2021',
//     title: 'Top Trends in Corporate Event Design and Engagement',
//     description: 'Progressively incentivize cooperative systems through\n' +
//         'technically sound functionalities. Credibly productivate\n' +
//         'seamless data with flexible schemas.',
//     event_type: "EVENT PLANNING TIPS"
//   }
//
// ])
export interface Articles {
  id: string
  media: string
  published_date: string
  title: string
  description: string
  event_type: string
}
defineProps<{
  articles: Articles[]
}>()
</script>

<template>
  <section class="space-y-space28">
    <h3 class="text-[24px] font-bold leading-[33.6px]">Popular Articles</h3>
    <div class="grid grid-cols-12 gap-space12">
      <NuxtLink v-for="(article, i) in articles" :key="i" class="relative col-span-12 sm:col-span-6 md:col-span-4" :to="{
        name: 'article-slug',
        params: {
          slug: article.id
        }
      }">
        <Card>
          <NuxtImg :src="article.media" height="280" class="rounded-[12px] h-[280px] w-full object-cover" />
          <Badge class="absolute top-0 right-space20" variant="secondary">{{article.event_type}}</Badge>
          <div class="p-space12">
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

    </div>

    <Button variant="outline" class="rounded-full">View More</Button>
  </section>
</template>

<style scoped>

</style>