import axios from 'axios'
import { getCookie } from './cookies'

const token = getCookie('token')
const bearerToken = `Bearer ${token}`

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

axios.interceptors.request.use(
  config => {
    if (!token) {
      window.location.href = `/login`
      return Promise.reject('No token found')
    }

    config.headers.Authorization = bearerToken
    return config
  },

  error => {
    console.log('axios request error: ', error)
    return Promise.reject(error)
  }
)

export default axios
