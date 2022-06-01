<template>
  <!-- OPTION BUTTONS & COUNT -->
  <div
    class="mt-12 flex justify-between"
    v-if="todosCount"
  >
    <div class="space-x-2">
      <!-- === ALL TASKS === -->
      <OptionButton
        label="All"
        :selected="currentSelection === 'all'"
        @clicked="getAll"
      />

      <OptionButton
        label="Open"
        :selected="currentSelection === 'open'"
        @clicked="getOpen"
      />

      <OptionButton
        label="Done"
        :selected="currentSelection === 'done'"
        @clicked="getDone"
      />
    </div>
    <span class="bg-blue-500 px-3 py-2 rounded-full text-white">{{ todosCount }}</span>
  </div> <!-- OPTION BUTTONS & COUNT -->
</template>

<script setup>
import { ref, computed } from "vue"
import { storeToRefs } from 'pinia'

import { useTodoStore } from '@/store/todos'

import OptionButton from '@/components/misc/buttons/OptionButton.vue'

  const currentSelection = ref()

  const { todosCount } = storeToRefs(useTodoStore())
  const { setFilter } = useTodoStore()

  const getAll = () => {
    currentSelection.value = 'all'
    setFilter('all')
  }

  const getOpen = () => {
    currentSelection.value = 'open'
    setFilter('open')
  }

  const getDone = () => {
    currentSelection.value = 'done'
    setFilter('done')
  }
</script>
