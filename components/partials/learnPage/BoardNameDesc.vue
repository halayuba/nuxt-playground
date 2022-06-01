<template>
  <RouterLink class="absolute inset-0 p-3"
    :to="board.url"
    v-if="board.url"
  >
    <span class="flex items-center block text-white text-lg font-bold">
      {{ board.name }}
      <BadgeCheckIcon class="ml-1 w-4 h-4 text-blue-100" title="Active"
        v-if="board.is_active"
      />
      <BanIcon class="ml-1 w-4 h-4 text-blue-100" title="Archived"
        v-if="!board.is_active"
      />
    </span>
    <span class="block text-xs text-white p-3 leading-tight">
      {{ board.description }}
    </span>
  </RouterLink>
  <div v-else class="absolute inset-0 p-3">
    <div class="flex items-center text-white text-lg font-bold">
      {{ board.name }}
      <BadgeCheckIcon class="ml-1 w-4 h-4 text-blue-100" title="Active"
        v-if="board.is_active"
      />
      <BanIcon class="ml-1 w-4 h-4 text-blue-100" title="Archived"
        v-if="!board.is_active"
      />
    </div>
    <div class="text-xs text-white p-3 leading-tight">
      {{ board.description }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { BadgeCheckIcon, BanIcon } from '@heroicons/vue/solid'

  const props = defineProps({
    board:{
      type: Object,
      required: true
    },
  })
  const title = ref('TEST')
</script>
