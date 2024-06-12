import axios from 'axios'
import { getCookie, removeCookie } from './cookies'
import { STATUS_CODES } from '../constants'

const token = getCookie('token')

axios.defaults.baseURL = import.meta.env.VITE_PUBLIC_BACKEND_URL

axios.interceptors.request.use(
  (config) => {
    if (!token && token === 'undefined') {
      window.location.href = `/login`
      return Promise.reject(new Error('No token found'))
    }

    const bearerToken = `Bearer ${token}`
    config.headers.Authorization = bearerToken
    return config
  },

  (error) => {
    console.log('axios request error: ', error)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const statusCode = error.response.status

    if (
      statusCode === STATUS_CODES.CLIENT_ERROR_UNAUTHORIZED ||
      statusCode === STATUS_CODES.CLIENT_ERROR_FORBIDDEN
    ) {
      removeCookie('token')
      window.location.href = `/login`
    }

    return Promise.reject(error)
  }
)

export default axios
