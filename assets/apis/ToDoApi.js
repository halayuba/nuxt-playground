import Api from "./Api"

const TODOS = '/todos'

export default {
  all () {
    return Api.get(TODOS)
  },

  post (data) {
    return Api.post(TODOS, data)
  },

  put (id) {
    return Api.put(`${TODOS}/${id}/update-completed`)
  },

  delete (id) {
    return Api.delete(`${TODOS}/${id}`)
  },

}
