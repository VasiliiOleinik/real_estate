import React from 'react'
import { Button, Container, Spinner, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'

const UploadImage = ({ isLoading, onInputChange }: any) => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div
        className={`d-flex border justify-content-center align-items-center position-relative text-gray-700 shadow p-2 rounded `}
        style={{ width: 240, height: 240 }}
      >
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <>
            <div className="d-flex flex-column align-items-center position-absolute">
              <Button
                variant="link"
                className="text-decoration-none text-reset"
              >
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  size="4x"
                  className="text-blue-700"
                />
              </Button>
            </div>

            <Form.Group
              controlId="formFile"
              className="position-relative h-100 w-100"
            >
              <Form.Control
                type="file"
                className="position-absolute top-0 left-0 h-100 w-100 opacity-0 cursor-pointer"
                onChange={onInputChange}
                style={{ zIndex: 1 }} // Ensure the input is above any other content
              />
            </Form.Group>
          </>
        )}
      </div>
    </Container>
  )
}

export default UploadImage
