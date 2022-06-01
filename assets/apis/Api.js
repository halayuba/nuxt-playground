import axios from 'axios'

const Api = axios.create({
  baseURL: 'http://localhost/api'
})

axios.defaults.withCredentials = true;

export default Api
