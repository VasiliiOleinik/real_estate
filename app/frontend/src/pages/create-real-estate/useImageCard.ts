import { deleteImageFromS3 } from '@/api/Estates'
import React from 'react'
import { useMutation } from 'react-query'

export const useImageCard = ({ estateID, removeImage, removeId }) => {
  const { mutate: deleteImage } = useMutation('image', deleteImageFromS3)

  function handleRemoveImage(url) {
    const imageName = url.split('/').at(-1)

    deleteImage({ estate_id: estateID, file_name: imageName })
    removeImage(removeId)
  }

  return {
    handleRemoveImage
  }
}
