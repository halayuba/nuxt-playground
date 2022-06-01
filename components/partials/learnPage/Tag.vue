<template>
  <div  class="bg-gray-200 text-xs text-gray-800 tracking-tight font-light text-center px-2 py-1 rounded-full cursor-pointer"
    @click.stop="setFilter(tag)"
  >
    {{ tag }}
  </div>
</template>

<script setup>
import { useCourseStore } from '@/store/courses';

  const props = defineProps({
    tag:{
      type: String,
      required: true
    },
  })

  const {setFilter} = useCourseStore()

</script>
