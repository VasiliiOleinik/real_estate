import { deleteImageFromS3 } from '@/api/Estates'
import { useMutation } from 'react-query'

const useImageCard = ({ estateID, removeImage, removeId }: any) => {
  const { mutate: deleteImage } = useMutation('image', deleteImageFromS3)

  function handleRemoveImage(url: any) {
    const imageName = url.split('/').at(-1)

    deleteImage({ estate_id: estateID, file_name: imageName })
    removeImage(removeId)
  }

  return {
    handleRemoveImage
  }
}
export default useImageCard
