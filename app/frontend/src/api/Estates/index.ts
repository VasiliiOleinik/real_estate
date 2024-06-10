import axios from '@/utils/axios'

export async function getRealEstates() {
  try {
    const { data } = await axios.get('/estate')

    return data
  } catch (error) {
    console.log('error', error)
  }
}

export async function getRealEstateById({ queryKey }) {
  const [, id] = queryKey
  try {
    const { data } = await axios.get(`/estate/${id}`)

    return data
  } catch (error) {
    console.log('error', error)
  }
}

export async function uploadImageToS3({ file }) {
  try {
    const { data } = await axios.post('/image', file, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    return data
  } catch (error) {
    console.log('error', error)
  }
}

export async function createEstate(formData) {
  try {
    const { data } = await axios.post(`/estate`, formData)

    return data
  } catch (error) {
    console.log('error', error)
  }
}
