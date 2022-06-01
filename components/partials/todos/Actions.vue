<template>

  <div class="flex items-center">

    <!-- DONE / OPEN -->
    <picture
      class="cursor-pointer"
      @click="toggleDone(todo._id)"
    >
      <icon
        name="checkbox"
        class="w-5 h-auto fill-current text-green-500"
        v-if="!todo.is_done"
      />
      <icon
        name="reverse"
        class="w-4 h-4 fill-current text-indigo-500"
        v-if="todo.is_done"
      />
    </picture> <!-- DONE / OPEN -->

    <!-- DELETE -->
    <picture
      class="cursor-pointer"
      @click="remove(todo._id)"
    >
      <icon
        name="delete2"
        class="w-5 h-auto fill-current text-red-500 ml-1"
      />
    </picture>

  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from "vue"
import { storeToRefs } from 'pinia'

import { useTodoStore } from '@/store/todos'

import vm from '@/main'

  // const store = useStore()
  const props = defineProps({
    todo:{
      type: Object,
      required: true
    }
  })

  const { error } = storeToRefs(useTodoStore())
  const { toggleTodoStatus, deleteTodo } = useTodoStore()

  /* == UPDATE TO DO AS COMPLETED OR INCOMPLETE == */
  const toggleDone = (todoId) => {
    toggleTodoStatus(todoId)
    if(error){
      vm.$toast.error('Updating failed.')
    } else {
      vm.$toast.success('Updated successfully.')
    }
  }

  /* == DELETE TO DO == */
  const remove = (todoId) => {
    if (!confirm("Are you sure?")) {
      return
    }
    deleteTodo(todoId)
    if(error){
      vm.$toast.error('Delete action failed.')
    } else {
      vm.$toast.success('Deleted successfully.')
    }
  }

</script>
