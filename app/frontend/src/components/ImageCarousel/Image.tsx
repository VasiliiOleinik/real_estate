import React from 'react'

const Image = React.memo(({ url, isActive }) => {
  return (
    <div
      className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
    >
      <img src={url} alt="Carousel" className="w-full h-full object-cover rounded-xl" />
    </div>
  )
})

export default Image
