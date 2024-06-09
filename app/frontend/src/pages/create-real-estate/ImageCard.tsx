import React from 'react'

const ImageCard = ({ image }) => {
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
    </div>
  )
}

export default ImageCard
