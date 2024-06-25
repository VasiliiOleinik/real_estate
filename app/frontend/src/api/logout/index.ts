import axios from '../../utils/axios'

export async function logout() {
  try {
    await axios.delete('/logout')
  } catch (error) {
    return error
  }
}
