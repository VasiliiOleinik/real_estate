import React from 'react'
import useImageCard from '@/hooks/useImageCard'

const ImageCard = ({ image, estateID, removeImage, removeId }: any) => {
  const { handleRemoveImage } = useImageCard({ estateID, removeImage, removeId })

  return (
    <div className="max-w-md mx-auto rounded-lg md:max-w-xl">
      <div
        className="relative 
      bg-clip-border
      rounded-xl
     bg-white
      text-gray-700
      shadow-md p-2
      shadow-dark
      transition-all
      flex
      justify-center
      items-center
      h-60
      w-60"
      >
        <img src={image} alt="image" className="w-full h-full" />
      </div>
      <button className="" onClick={() => handleRemoveImage(image)}>
        Delete
      </button>
    </div>
  )
}

export default ImageCard
