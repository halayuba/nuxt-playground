<template>
  <div class="mt-4 flex-1 overflow-x-auto flex px-4">
    <div class="inline-flex items-start h-full px-2 pb-4"
      v-for="list in boardListTypes"
      :key="list.id"
    >
        <!-- CARD ITEMS -->
        <BoardList :list="list" />

    </div>
  </div>
</template>

<script setup>
import {boardListTypes} from '@/assets/data/learning'
import BoardList from '@/components/partials/learnPage/BoardList.vue'
</script>
