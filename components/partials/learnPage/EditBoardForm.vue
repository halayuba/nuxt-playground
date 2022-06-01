<template>
  <form>
    <label for="name" class="block text-sm text-gray-600 font-medium">Add a new board</label>
    <input type="text" name="name" id="name" class="mt-2 w-full p-3 text-sm text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
      v-model="name"
    >
    <textarea name="description" rows="4" class="mt-2 w-full p-3 text-sm text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
      v-model="description"
    ></textarea>
    <div class="flex justify-end mt-2">
      <button class="bg-indigo-600 hover:bg-indigo-500 text-sm text-white font-medium px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none"
        @click.prevent="submit"
        :class="{ 'pointer-events-none opacity-50': ! formSubmitIsReady }"
      >Submit</button>
    </div>
  </form>
</template>

<script setup>
import { ref, computed} from "vue"
// import { storeToRefs } from 'pinia'

import { useBoardStore } from '@/store/boards'

import vm from '@/main'

  const props = defineProps({
    board:{
      type: Object,
      required: true
    },
  })
  const name = ref(props.board.name)
  const description = ref(props.board.description)

  const formSubmitIsReady = computed(() => name.value !== '' && description.value !== '')

  // const { error } = storeToRefs(useBoardStore())
  const { updateBoard } = useBoardStore()

  const emit = defineEmits()

  const submit = () => {
    try {
      updateBoard({
        id: props.board._id,
        name: name.value.trim(),
        description: description.value.trim()
      })
      name.value = ''
      description.value = ''
      vm.$toast.success('Updated successfully.')
      emit('closeForm')
    } catch (err) {
      vm.$toast.error(err)
    }
  }
</script>
