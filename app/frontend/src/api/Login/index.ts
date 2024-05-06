import axios from '@/utils/axios'
import { setCookie } from '@/utils/cookies'

export async function login(credentials: { username: string; password: string }) {
  try {
    const { data } = await axios.post('/login', credentials)

    setCookie('token', data.access_token)
  } catch (error) {
    console.log('errorerror', error)
    console.log('login had an error', error)

    return error
  }
}
