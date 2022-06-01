import { defineStore } from 'pinia'
// import axios from 'axios'
// import baseUrl from 'assets/apis/baseUrl'
import {todosData} from '@/assets/data/todos'

export const useTodoStore = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, isdone: boolean }[]} */
    todos: todosData,
    // todos: [],
    /** @type {'all' | 'done' | 'open'} */
    filter: 'all',
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    todosCount(state){
      return state.todos.length
    },
    doneTodos(state) {
      // autocompletion! ✨
      return state.todos.filter((todo) => todo.is_done)
    },
    openTodos(state) {
      return state.todos.filter((todo) => !todo.is_done)
    },
    /**
     * @returns {{ text: string, id: number, isdone: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'done') {
        // call other getters with autocompletion ✨
        return this.doneTodos
      } else if (this.filter === 'open') {
        return this.openTodos
      }
      return this.todos
    },
  },
  actions: {
    async fetchTodos() {
      this.todos = []
      try {
        // const response = await axios.get(baseUrl.todos)
        // this.todos = response.data
        // .then((response) => response.json())
      } catch (error) {
        this.error = error
      }
    },
    async addTodo(body) {
      try {
        // const response = await axios.post(baseUrl.todos, body)
        // this.todos = response.data
      } catch (error) {
        this.error = error
      }
    },
    async updateTodo({todoId, body}) {
      try {
        // const response = await axios.patch(`${baseUrl.todos}/${todoId}`, { body })
        let arrayIndex = this.todos.findIndex(x => x.id === todoId)
        this.todos[arrayIndex].body = body
      } catch (error) {
        this.error = error
      }
    },
    async toggleTodoStatus(todoId) {
      try {
        // const response = await axios.put(`${baseUrl.todos}/${todoId}/status`)
        // this.todos = response.data
        // let arrayIndex = this.todos.findIndex(x => x.id === todoId)
        // this.todos[arrayIndex].is_done = response.data.is_done
      } catch (error) {
        this.error = error
      }
    },
    async deleteTodo(todoId) {
      try {
        // const response = await axios.delete(`${baseUrl.todos}/${todoId}`)
        let arrayIndex = this.todos.findIndex(x => x.id === todoId)
        this.todos.splice(arrayIndex, 1)
      } catch (error) {
        this.error = error
      }
    },
    setFilter(value){
      this.filter = value
    }
  },
})