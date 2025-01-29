<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <p :class="cn('text-[12px] text-[#6C757D] dark:text-neutral-400', props.class)">
    <slot />
  </p>
</template>
