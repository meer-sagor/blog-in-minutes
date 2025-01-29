<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('text-sm text-[#6C757D] leading-[19.6px]', props.class)">
    <slot />
  </div>
</template>
