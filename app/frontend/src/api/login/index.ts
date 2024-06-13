import axios from '../../utils/axios'

export async function login(credentials: { email: string; password: string }) {
  try {
    const { data } = await axios.post('/login', credentials)

    return data
  } catch (error) {
    return error
  }
}
