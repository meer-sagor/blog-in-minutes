<script setup lang="ts">

import {formatDate} from "~/utils";

export interface Articles {
  id: string
  media: string
  created_at: string
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

    <PopularArticlesEmptyPlaceholder v-if="!articles.length" />

    <div v-else class="grid grid-cols-12 gap-space12">
      <NuxtLink v-for="(article, i) in articles" :key="i" class="relative col-span-12 sm:col-span-6 md:col-span-4 self-start" :to="{
        name: 'article-slug',
        params: {
          slug: article.id
        }
      }">
        <Card>
          <NuxtImg :src="article.media" height="280" class="rounded-[12px] h-[280px] w-full object-cover" />
          <Badge class="absolute top-0 right-space20" variant="secondary">{{article.event_type}}</Badge>
          <div class="p-space12 pt-0">
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

    </div>

    <Button v-if="articles.length" variant="outline" class="rounded-full">View More</Button>
  </section>
</template>

<style scoped>

</style>