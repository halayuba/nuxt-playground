<template>
  <!-- ADD NEW TO DO -->
  <div class="flex items-center">
    <form
      class="w-full flex"
      @submit.prevent="submit"
    >
      <input
        class="w-full block pl-4 py-3 bg-gray-900 rounded-l-lg text-white placeholder-gray-400 focus:bg-gray-100 focus:text-gray-900 focus:placeholder-gray-600 focus:outline-none"
        placeholder="New to do"
        v-model="body"
      />
      <button
        class="text-center align-middle whitespace-no-wrap select-none cursor-pointer inline-block mb-0 bg-blue-500 text-white font-semibold text-lg rounded-r-lg leading-tight px-4 py-2 shadow"
        :class="{ 'pointer-events-none opacity-50': ! formSubmitIsReady }"
      >Save</button>
    </form>
  </div> <!-- NEW TO DO -->
</template>

<script setup>
import { ref, computed } from "vue"
import { storeToRefs } from 'pinia'

import { useTodoStore } from '@/store/todos'

import vm from '@/main'

  const body = ref('')

  const formSubmitIsReady = computed(() => body.value !== '')

  const { error } = storeToRefs(useTodoStore())
  const { addTodo } = useTodoStore()

  /* == STORE NEW TO DO == */
  const submit = () => {
    addTodo({body: body.value})
    if(error){
      vm.$toast.error(error)
    } else {
      body.value = ''
      vm.$toast.success('Saved successfully.')
    }
  }
</script>
