import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import useImageCard from './useImageCard'

const ImageCard = ({ image, estateID, removeImage, removeId }: any) => {
  const { handleRemoveImage } = useImageCard({
    estateID,
    removeImage,
    removeId,
  })

  return (
    <div className="mx-auto" style={{ maxWidth: '18rem' }}>
      <Card className="mb-2">
        <Card.Img
          variant="top"
          src={image}
          alt="image"
          style={{ height: '15rem', objectFit: 'cover' }}
        />
        <Card.Body className="d-flex justify-content-center align-items-center">
          <Button variant="danger" onClick={() => handleRemoveImage(image)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ImageCard
