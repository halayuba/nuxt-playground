<template>
  <div >
    <!-- TOPIC -->
    <a class="text-sm leading-tight" target="_blank"
      :href="[ item.url ? item.url : '#' ]"
    >
      {{ item.topic }}
    </a> <!-- TOPIC -->

    <!-- ADDITIONAL DETAILS: HIDDEN INITIALLY -->
    <p class="hidden group-hover:block mt-2 text-xs text-blue-600 font-light overflow-x-auto"
      v-if="item.published_at"
    >
      {{ item.published_at }}
      <span class="ml-2">{{ item.duration }}</span>
    </p> <!-- ADDITIONAL DETAILS -->

    <!-- DETAILS -->
    <div class="mt-2 flex justify-between items-center overflow-x-auto space-x-2"
      :class="{ 'pb-2': item.tags.length > 3}"
    >

      <div class="shrink-0 flex space-x-2">
        <!-- SOURCE -->
        <SourceIcons :source="item.source" />

        <!-- AUTHOR -->
        <div class="shrink-0 flex items-center">
          <icon name="user" class="w-4 h-auto" title="Author" />
          <span class="ml-1 text-xs text-gray-700">{{ item.author }}</span>
        </div> <!-- AUTHOR -->
      </div>

      <!-- TAGS -->
      <div class="flex justify-end items-center">
        <div class="ml-1 flex"
          v-for="tag in item.tags"
          :key="tag"
        >
          <Tag :tag="tag" />
        </div>
      </div> <!-- TAGS -->
    </div> <!-- DETAILS -->

    <!-- EDIT BUTTON -->
    <button class="hidden absolute top-1 right-1 bg-gray-300 hover:bg-gray-200 w-8 h-8 rounded-md group-hover:grid place-content-center text-gray-600 hover:text-black">
      <PencilIcon class="w-5 h-5" />
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue"
import SourceIcons from '@/components/partials/learnPage/SourceIcons.vue'
import Tag from '@/components/partials/learnPage/Tag.vue'
import { PencilIcon } from '@heroicons/vue/solid'

  const props = defineProps({
    item:{
      type: Object,
      required: true
    }
  })
</script>
