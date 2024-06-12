import React from 'react'

const Image = React.memo(({ url, isActive }: any) => {
  return (
    <div
      className={`position-absolute w-100 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img
        src={url}
        alt="Carousel"
        style={{ height: '500px', width: '100%', objectFit: 'cover' }}
      />
    </div>
  )
})

export default Image
