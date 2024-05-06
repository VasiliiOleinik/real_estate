import React, { useCallback, useState } from 'react'

export default function useImageCarousel(images: string[]) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const goToNextSlide = () => {
    setActiveImageIndex(prevIndex => (prevIndex + 1) % images.length)
  }

  const goToPreviousSlide = () => {
    setActiveImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleMouseEnter = useCallback(() => setIsHovered(true), [setIsHovered])
  const handleMouseLeave = useCallback(() => setIsHovered(false), [setIsHovered])

  return {
    activeImageIndex,
    goToNextSlide,
    goToPreviousSlide,
    isHovered,
    handleMouseEnter,
    handleMouseLeave
  }
}
