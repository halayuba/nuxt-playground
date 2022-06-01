<template>
  <form>
    <label for="name" class="block text-sm text-gray-600 font-medium">Add a new board</label>
    <input type="text" name="name" id="name" placeholder="Board name" class="mt-2 w-full p-3 text-sm text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
      v-model="name"
    >
    <textarea name="description" placeholder="Board description" rows="4" class="mt-2 w-full p-3 text-sm text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
      v-model="description"
    ></textarea>
    <div class="flex justify-end mt-2">
      <button class="bg-indigo-600 hover:bg-indigo-500 text-sm text-white font-medium px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none"
        @click.prevent="submit"
        :class="{ 'pointer-events-none opacity-50': ! formSubmitIsReady }"
      >Create board</button>
    </div>
  </form>
</template>

<script setup>
import { ref, computed} from "vue"
import { storeToRefs } from 'pinia'

import { useBoardStore } from '@/store/boards'

import vm from '@/main'

  const name = ref('')
  const description = ref('')

  const formSubmitIsReady = computed(() => name.value !== '' && description.value !== '')

  const { error } = storeToRefs(useBoardStore())
  const { addBoard } = useBoardStore()

  const emit = defineEmits()

  const submit = () => {
    try {
      addBoard({
        name: name.value.trim(),
        description: description.value.trim()
      })
      name.value = ''
      description.value = ''
      vm.$toast.success('Created successfully.')
      emit('closeForm')
    } catch (err) {
      vm.$toast.error(error)
    }
  }
</script>
