<script setup lang="ts">
const articles = ref([
    {
  media: 'images/hero-section/hero-feature.jpeg',
  published_date: '08.08.2021',
  title: 'Top Trends in Corporate Event Design and Engagement',
  description: 'Progressively incentivize cooperative systems through\n' +
      'technically sound functionalities. Credibly productivate\n' +
      'seamless data with flexible schemas.',
      event_type: "EVENT PLANNING TIPS"
},
  {
    media: 'images/hero-section/hero-feature.jpeg',
    published_date: '08.08.2021',
    title: 'Top Trends in Corporate Event Design and Engagement',
    description: 'Progressively incentivize cooperative systems through\n' +
        'technically sound functionalities. Credibly productivate\n' +
        'seamless data with flexible schemas.',
    event_type: "EVENT PLANNING TIPS"
  },
  {
    media: 'images/hero-section/hero-feature.jpeg',
    published_date: '08.08.2021',
    title: 'Top Trends in Corporate Event Design and Engagement',
    description: 'Progressively incentivize cooperative systems through\n' +
        'technically sound functionalities. Credibly productivate\n' +
        'seamless data with flexible schemas.',
    event_type: "EVENT PLANNING TIPS"
  },
  {
    media: 'images/hero-section/hero-feature.jpeg',
    published_date: '08.08.2021',
    title: 'Top Trends in Corporate Event Design and Engagement',
    description: 'Progressively incentivize cooperative systems through\n' +
        'technically sound functionalities. Credibly productivate\n' +
        'seamless data with flexible schemas.',
    event_type: "EVENT PLANNING TIPS"
  },
  {
    media: 'images/hero-section/hero-feature.jpeg',
    published_date: '08.08.2021',
    title: 'Top Trends in Corporate Event Design and Engagement',
    description: 'Progressively incentivize cooperative systems through\n' +
        'technically sound functionalities. Credibly productivate\n' +
        'seamless data with flexible schemas.',
    event_type: "EVENT PLANNING TIPS"
  },
  {
    media: 'images/hero-section/hero-feature.jpeg',
    published_date: '08.08.2021',
    title: 'Top Trends in Corporate Event Design and Engagement',
    description: 'Progressively incentivize cooperative systems through\n' +
        'technically sound functionalities. Credibly productivate\n' +
        'seamless data with flexible schemas.',
    event_type: "EVENT PLANNING TIPS"
  },
  {
    media: 'images/hero-section/hero-feature.jpeg',
    published_date: '08.08.2021',
    title: 'Top Trends in Corporate Event Design and Engagement',
    description: 'Progressively incentivize cooperative systems through\n' +
        'technically sound functionalities. Credibly productivate\n' +
        'seamless data with flexible schemas.',
    event_type: "PLANNING TIPS"
  },
  {
    media: 'images/hero-section/hero-feature.jpeg',
    published_date: '08.08.2021',
    title: 'Top Trends in Corporate Event Design and Engagement',
    description: 'Progressively incentivize cooperative systems through\n' +
        'technically sound functionalities. Credibly productivate\n' +
        'seamless data with flexible schemas.',
    event_type: "EVENT PLANNING TIPS"
  },
  {
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
  <section class="space-y-space28">
    <h3 class="text-[24px] font-bold leading-[33.6px]">Popular Articles</h3>
    <div class="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-space12">
      <Card v-for="(article, i) in articles" :key="i" class="relative">
        <NuxtImg :src="article.media" height="280" class="rounded-[12px] w-full object-cover" />
        <Badge class="absolute top-0 right-space20" variant="secondary">{{article.event_type}}</Badge>
        <CardDescription>{{article.published_date}}</CardDescription>
        <CardHeader>
          <CardTitle class="leading-[25.6px]">{{article.title}}</CardTitle>
        </CardHeader>
        <CardContent>
          {{article.description}}
        </CardContent>
      </Card>
    </div>

    <Button variant="outline" class="rounded-full">View More</Button>
  </section>
</template>

<style scoped>

</style>