<template>
  <div class="">
    <div class="max-w-xl mx-auto flex justify-center items-center">
      <!-- HOME -->
      <router-link to="/" class="mr-4">
        <HomeIcon class="w-12 h-12 text-blue-600" />
      </router-link>

      <NavBar />
    </div>

    <PageHeader>To Dos</PageHeader>

    <div class="max-w-xl mx-auto mt-12">

      <CreateForm />

      <OptionBtns />

      <!-- LIST OF TODOS -->
      <div
        class="mt-4 bg-gray-200 rounded-xl py-4"
        :class="todosCount ? 'mt-2' : 'mt-6'"
        v-if="todosCount"
      >
          <Todo
            v-for="todo in filteredTodos"
            :key="todo.id"
            :todo="todo"
          />

      </div>

      <div class="mt-8 mx-auto max-w-xl bg-yellow-600 p-6 text-yellow-200 text-lg tracking-wide shadow"
        v-else
      >
        There are no to do tasks for you.
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue"
import { storeToRefs } from 'pinia'
// import { HomeIcon } from '@heroicons/vue/solid'

import { useTodoStore } from '@/store/todos'

// import NavBar from '@/components/layouts/NavBar.vue'
// import Todo from '@/components/partials/todos/Todo.vue'
// import CreateForm from '@/components/partials/todos/CreateForm.vue'
// import OptionBtns from '@/components/partials/todos/OptionBtns.vue'
// import vm from '@/main'

  const { filteredTodos } = storeToRefs(useTodoStore())
  // const { todos, todosCount } = useTodoStore()

  const todosCount = computed(() => filteredTodos.value.length)
  // const todos = computed(() => store.state.todos.filtered)

  // onMounted(() => {
  //   if(todosCount){
  //     vm.$toast.success('Todos loaded successfully.')
  //   } else {
  //     vm.$toast.error('There are no to do tasks for now.')
  //   }
  // })

  // const { fetchTodos } = useTodoStore()

  // fetchTodos()

</script>
