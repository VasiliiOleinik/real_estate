import axios from '@/utils/axios'

export async function getRealEstates() {
  try {
    const result = await axios.get('/estates')

    console.log(result)
  } catch (error) {
    console.log('error', error)
  }
}
