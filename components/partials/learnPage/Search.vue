<template>
  <div class="flex flex-col ">
    <form class="flex items-center">

      <div class="flex items-center relative">
        <!-- CLEAR SEARCH -->
        <figure class="absolute right-0 pr-4 flex items-center text-red-500 cursor-pointer" title="clear search"
          @click="clearSearch"
          v-if="searchField"
        >
          <icon name="backspace" class="w-6 h-6" />
        </figure>

        <input class="flex-1 px-4 py-2 rounded-l-full focus:outline-none" placeholder="Search"
          v-model="searchField"
          @input="processInput"
        />
      </div>
      <button type="button" class="px-6 py-2 text-white rounded-r-full bg-white/20 hover:bg-white/30 focus:outline-none"
        :class="{ 'pointer-events-none': ! formSubmitIsReady }"
      >Go</button>
    </form>

    <!-- FILTER -->
    <div class="group mt-2 flex justify-center items-center text-white hover:text-red-300 hover:line-through hover:cursor-pointer"
      v-if="filter"
      @click="removeFilter"
    >
      <icon name="filter" />
      <span class="ml-2 ">{{ filter }}</span>
      <icon name="clear" class="hidden ml-1 w-5 h-5 fill-current text-red-300 group-hover:block hover:text-red-400" />
    </div>

  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref, computed, watch } from 'vue';

import { useCourseStore } from '@/store/courses';

  const { filter } = storeToRefs(useCourseStore())
  const { setSearch } = useCourseStore()


  function removeFilter(){
    useCourseStore().$patch(state => state.filter = '')
  }

  const searchField = ref('')
  const formSubmitIsReady = computed(() => searchField.value )

  const clearSearch = () => {
    searchField.value = ''
    setSearch(null)
  }

  const processInput = (e) => {
    let searchValue = e.target.value.trim()
    if(searchValue){
      setSearch(searchValue)
    }
  }

  watch(() => searchField.value, () => {
    if(searchField.value == '') setSearch(null)
  })

</script>
