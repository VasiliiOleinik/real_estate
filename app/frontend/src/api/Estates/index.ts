import axios from '../../utils/axios'

export async function getRealEstates() {
  try {
    const { data } = await axios.get('/estate')

    return data
  } catch (error) {
    console.log('error', error)
  }
}

export async function getRealEstateById({ queryKey }: any) {
  const [, id] = queryKey
  try {
    const { data } = await axios.get(`/estate/${id}`)

    return data
  } catch (error) {
    console.log('error', error)
  }
}

export async function uploadImageToS3({ file }: any) {
  try {
    const { data } = await axios.post('/image', file, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return data
  } catch (error) {
    console.log('error', error)
  }
}

export async function deleteImageFromS3({ estate_id, file_name }: any) {
  try {
    const { data } = await axios.post('/image/destroy', {
      estate_id,
      file_name,
    })

    return data
  } catch (error) {
    console.log('error', error)
  }
}

export async function createEstate(formData: any) {
  try {
    const { data } = await axios.post(`/estate`, formData)

    return data
  } catch (error) {
    console.log('error', error)
  }
}
