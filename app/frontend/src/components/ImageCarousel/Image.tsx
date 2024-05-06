import React from 'react'

const Image = React.memo(({ url, isActive }) => {
  console.log('url', url)
  console.log('isActive', isActive)
  return (
    <div
      className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
    >
      <img src={url} alt="Carousel" className="w-full h-full object-cover" />
    </div>
  )
})

export default Image
