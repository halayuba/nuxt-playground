import { defineStore } from 'pinia'
import axios from 'axios'
import baseUrl from '@/apis/baseUrl'

export const useBoardStore = defineStore('boards', {
  state: () => ({
    boards: null,
    error: null,
    loading: false,
    modalState: false
  }),
  getters: {
    boardsCount(state){
      return state.boards.length
    },
  },
  actions: {
    /* == GET ALL BOARDS == */
    async fetchBoards() {
      this.boards = []
      this.loading = true
      try {
        const response = await axios.get(baseUrl.boards)
        this.boards = response.data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    /* == INSERT NEW BOARD == */
    async addBoard(payload) {
      this.error = null
      try {
        const response = await axios.post(baseUrl.boards, payload)
        this.boards = response.data
      } catch (error) {
        this.error = error
      }
    },
    /* == EDIT BOARD == */
    async updateBoard({id, name, description}) {
      try {
        const response = await axios.patch(`${baseUrl.boards}/${id}`, { name, description })
        this.boards = response.data
      } catch (error) {
        this.error = error
      }
    },
    /* == UPDATE BOARD STATUS == */
    async toggleBoardStatus(itemId) {
      this.error = null
      try {
        const response = await axios.put(`${baseUrl.boards}/${itemId}/status`)
        this.boards = response.data
      } catch (error) {
        this.error = error
      }
    },
    /* == DELETE BOARD == */
    async deleteBoard(itemId) {
      this.error = null
      try {
        const response = await axios.delete(`${baseUrl.boards}/${itemId}`)
        this.boards = response.data
      } catch (error) {
        this.error = error
      }
    },
    /* == UPDATE THE MODAL STATE == */
    updateModalState(val){
      this.modalState = val
    }
  },
})
