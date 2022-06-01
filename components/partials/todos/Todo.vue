<template>
  <div
    class="flex justify-between items-center px-4 border-b border-gray-100 py-4"
    :class="{ 'bg-green-200': todo.is_done }"
  >
    <div class="space-x-4">
      <span class="text-sm"
        :class="[ todo.is_done ? 'text-gray-500' : 'text-blue-700 font-bold' ]"
      >
        {{ dateFormatter(todo.createdAt) }}
      </span>
      <span class="text-gray-700">{{ todo.body }}</span>
    </div>

    <!-- ACTIONS -->
    <Actions :todo="todo" />
  </div>
</template>

<script setup>
import dayjs from 'dayjs'

import Actions from '@/components/partials/todos/Actions.vue'

  const props = defineProps({
    todo:{
      type: Object,
      required: true
    },
  })

  const dateFormatter = (date) => {
    return dayjs(date).format('MMM D, YYYY')
  }

</script>
