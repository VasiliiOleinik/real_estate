import React from 'react'
import useImageCarousel from './useImageCarousel'
import Image from './Image'

export default function ImageCarousel({
  images,
  imageHeight = 'h-64'
}: {
  images: string[]
  imageHeight?: string
}) {
  const {
    activeImageIndex,
    goToNextSlide,
    goToPreviousSlide,
    isHovered,
    handleMouseEnter,
    handleMouseLeave
  } = useImageCarousel({ images })

  return (
    <div
      className={`relative ${imageHeight}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={goToPreviousSlide}
        className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-300 hover:bg-white text-white font-bold h-8 w-8 rounded-full flex items-center justify-center z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-4 w-4 text-gray-800"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNextSlide}
        className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 hover:bg-white text-white font-bold h-8 w-8 rounded-full flex items-center justify-center z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-4 w-4 transform rotate-180  text-gray-800"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      {images?.map((image, index) => (
        <Image key={index} url={image} isActive={activeImageIndex === index} />
      ))}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 mt-2">
        {images?.map((image, index) => (
          <div
            key={index}
            className={`h-1 w-1 rounded-full bg-white ${activeImageIndex === index ? 'bg-opacity-100' : 'bg-opacity-60'}`}
          />
        ))}
      </div>
    </div>
  )
}
