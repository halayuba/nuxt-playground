<template>
  <div class="w-112 max-h-full bg-gray-200 flex flex-col rounded-md overflow-hidden">

    <!-- TITLE AND OPTIONS -->
    <ListHeader
      :list="list"
      :countCourses="boardCoursesCount"
      v-if="boardCourses"
    />

    <div class="mt-1 px-3 pb-3 overflow-y-auto ">
      <ul class="space-y-3">
        <li class="group relative bg-white hover:bg-gray-50 p-3 shadow rounded-md border-b border-gray-300"
          v-for="item in boardCourses"
          :key="item.id"
        >
          <ListCard :item="item" />
        </li>
      </ul>
    </div>

    <!-- BUTTON TO ADD NEW CARDS -->
    <AddNewCardBtn />

  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue"
import { storeToRefs } from 'pinia'

import { useCourseStore } from '@/store/courses'

import AddNewCardBtn from '@/components/partials/learnPage/AddNewCardBtn.vue'
import ListHeader from '@/components/partials/learnPage/ListHeader.vue'
import ListCard from '@/components/partials/learnPage/ListCard.vue'

  const props = defineProps({
    list:{
      type: Object,
      required: true
    },
  })

  const { getBoardCourses } = useCourseStore()

  const boardCourses = ref([])

  const boardCoursesCount = computed(() => boardCourses.value.length)

  // boardCourses.value = getBoardCourses(props.board.type)

  watchEffect(() => {
    boardCourses.value = getBoardCourses(props.list.type)
  })

</script>
