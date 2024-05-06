import axios from '@/utils/axios'

export async function getRealEstates() {
  try {
    const {data} = await axios.get('/estate')

    return data
  } catch (error) {
    console.log('error', error)
  }
}
