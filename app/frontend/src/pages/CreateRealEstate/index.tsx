import React from 'react'
import { userCreateEstate } from './userCreateEstate'
import { Controller } from 'react-hook-form'
import ImageCard from './ImageCard'
import UploadImage from '../../components/UploadImage'
import { Col, Row, Form } from 'react-bootstrap'

const CreateRealEstate = () => {
  const {
    onImageInputChange,
    isLoading,
    fields,
    estateID,
    control,
    onInfrastructureChange,
    onExtraChange,
    handleSubmit,
    onSubmit,
    remove,
  } = userCreateEstate()
  return (
    <>
      <p>{estateID}</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-4">
          <Col className="border rounded p-2">
            <Row>
              <Col>
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <Form.Group className="mb-3" controlId="title">
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        id="title"
                        placeholder="Villa Madrid"
                      />
                    </Form.Group>
                  )}
                />
              </Col>
              <Col>
                <Controller
                  name="property_type"
                  control={control}
                  render={({ field }) => (
                    <Form.Group className="mb-3" controlId="property_type">
                      <Form.Label> Select an proprty type</Form.Label>
                      <Form.Select
                        {...field}
                        aria-label="Choose a property type"
                        id="property_type"
                      >
                        <option>Choose a property type</option>
                        <option value="Villa">Villa</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Bungalow">Bungalow</option>
                        <option value="Townhouse">Townhouse</option>
                        <option value="Penthouse">Penthouse</option>
                      </Form.Select>
                    </Form.Group>
                  )}
                />
              </Col>
              <Col>
                <Controller
                  name="property_rooms"
                  control={control}
                  render={({ field }) => (
                    <Form.Group className="mb-3" controlId="property_rooms">
                      <Form.Label>Property rooms</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        id="property_rooms"
                        placeholder="5"
                      />
                    </Form.Group>
                  )}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Controller
                  name="estate_status"
                  control={control}
                  render={({ field }) => (
                    <Form.Group className="mb-3" controlId="estate_status">
                      <Form.Label> Select an estate status</Form.Label>
                      <Form.Select
                        {...field}
                        aria-label="Select an estate status"
                        id="estate_status"
                      >
                        <option>Select a status</option>
                        <option value="For rent">For Rent</option>
                        <option value="For sale">For Sale</option>
                        <option value="Sold">Sold</option>
                        <option value="Rented">Rented</option>
                        <option value="Under construction">
                          Under Construction
                        </option>
                      </Form.Select>
                    </Form.Group>
                  )}
                />
              </Col>
              <Col>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <Form.Group className="mb-3" controlId="country">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        id="country"
                        placeholder="Italy"
                      />
                    </Form.Group>
                  )}
                />
              </Col>
              <Col>
                <Controller
                  name="region"
                  control={control}
                  render={({ field }) => (
                    <Form.Group className="mb-3" controlId="region">
                      <Form.Label>Region</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        id="region"
                        placeholder="Tuscany"
                      />
                    </Form.Group>
                  )}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Controller
                  name="location_details"
                  control={control}
                  render={({ field }) => (
                    <Form.Group className="mb-3" controlId="location_details">
                      <Form.Label> Location details</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        id="location_details"
                        placeholder="Hillside"
                      />
                    </Form.Group>
                  )}
                />
              </Col>
              <Col>
                <Controller
                  name="price"
                  control={control}
                  render={({ field }) => (
                    <Form.Group className="mb-3" controlId="price">
                      <Form.Label> Price</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        id="price"
                        placeholder="1 000 000"
                      />
                    </Form.Group>
                  )}
                />
              </Col>
              <Col>
                <Controller
                  name="building_type"
                  control={control}
                  render={({ field }) => (
                    <Form.Group className="mb-3" controlId="building_type">
                      <Form.Label>Building type</Form.Label>
                      <Form.Select
                        {...field}
                        aria-label="Select a building type"
                        id="building_type"
                      >
                        <option>Select a building type</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Mixed use">Mixed Use</option>
                      </Form.Select>
                    </Form.Group>
                  )}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Controller
                  name="energy_level"
                  control={control}
                  render={({ field }) => (
                    <Form.Group className="mb-3" controlId="energy_level">
                      <Form.Label>Energy level</Form.Label>
                      <Form.Select
                        {...field}
                        aria-label="Select an energy level"
                        id="energy_level"
                      >
                        <option>Select an energy level</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="very_high">Very High</option>
                        <option value="extreme">Extreme</option>
                      </Form.Select>
                    </Form.Group>
                  )}
                />
              </Col>
              <Col>
                <Controller
                  name="ownership"
                  control={control}
                  render={({ field }) => (
                    <Form.Group className="mb-3" controlId="ownership">
                      <Form.Label> Ownership</Form.Label>
                      <Form.Select
                        {...field}
                        aria-label="Select an energy level"
                        id="ownership"
                      >
                        <option>Select an ownership type</option>
                        <option value="Freehold">Freehold</option>
                        <option value="Leasehold">Leasehold</option>
                        <option value="Commonhold">Commonhold</option>
                        <option value="Share of freehold">
                          Share of Freehold
                        </option>
                      </Form.Select>
                    </Form.Group>
                  )}
                />
              </Col>
              <Col>
                <Controller
                  name="floor"
                  control={control}
                  render={({ field }) => (
                    <Form.Group className="mb-3" controlId="floor">
                      <Form.Label> Floor</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        id="floor"
                        placeholder="2"
                      />
                    </Form.Group>
                  )}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Controller
                  name="usefull_area"
                  control={control}
                  render={({ field }) => (
                    <Form.Group className="mb-3" controlId="usefull_area">
                      <Form.Label> Usefull area</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        id="usefull_area"
                        placeholder="200"
                      />
                    </Form.Group>
                  )}
                />
              </Col>
              <Col>
                <Controller
                  name="availability"
                  control={control}
                  render={({ field }) => (
                    <Form.Group className="mb-3" controlId="availability">
                      <Form.Label> Availability</Form.Label>
                      <Form.Select
                        {...field}
                        aria-label="Select availability"
                        id="availability"
                      >
                        <option>Select availability</option>
                        <option value="Available now">Available Now</option>
                        <option value="Available soon">Available Soon</option>
                        <option value="Occupied">Occupied</option>
                        <option value="Under construction">
                          Under Construction
                        </option>
                        <option value="Sold out">Sold Out</option>
                      </Form.Select>
                    </Form.Group>
                  )}
                />
              </Col>
            </Row>
            <Row>
              <Form.Group className="mb-3">
                <Form.Label>Infrastructure</Form.Label>
                <Row>
                  <Col>
                    <Form.Check
                      onChange={onInfrastructureChange}
                      type={'checkbox'}
                      label={'Garden'}
                      id={'garden'}
                      value="garden"
                      name="garden"
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      onChange={onInfrastructureChange}
                      type={'checkbox'}
                      label={'Pool'}
                      id={'pool'}
                      value="pool"
                      name="pool"
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      onChange={onInfrastructureChange}
                      type={'checkbox'}
                      label={'Garage'}
                      id={'garage'}
                      value="garage"
                      name="garage"
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      onChange={onInfrastructureChange}
                      type={'checkbox'}
                      label={'Parking'}
                      id={'parking'}
                      value="parking"
                      name="parking"
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="garden_area">
                  <Form.Label> Garden area</Form.Label>
                  <Form.Control
                    onChange={onExtraChange}
                    type="text"
                    id="garden_area"
                    name="garden_area"
                    placeholder="500"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="pool_area">
                  <Form.Label> Pool area</Form.Label>
                  <Form.Control
                    onChange={onExtraChange}
                    type="text"
                    id="pool_area"
                    name="pool_area"
                    placeholder="100"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="garage_area">
                  <Form.Label>Garage area</Form.Label>
                  <Form.Control
                    onChange={onExtraChange}
                    type="text"
                    id="garage_area"
                    name="garage_area"
                    placeholder="50"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="parking_area">
                  <Form.Label>Parking area</Form.Label>
                  <Form.Control
                    onChange={onExtraChange}
                    type="text"
                    id="parking_area"
                    name="parking_area"
                    placeholder="50"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Controller
              name="description"
              control={control}
              render={({ field }: any) => (
                <Form.Group className="mb-1" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    {...field}
                    as="textarea"
                    rows={3}
                    id="description"
                    name="description"
                    placeholder="Your text here"
                  />
                </Form.Group>
              )}
            />
          </Col>
          <Col className="border rounded p-2">
            <Row className="grid grid-cols-5 gap-4">
              {fields.map(({ url, id }: any) => (
                <Col key={id}>
                  <ImageCard
                    image={url}
                    estateID={estateID}
                    removeImage={remove}
                    removeId={id}
                  />
                </Col>
              ))}
              <UploadImage
                onInputChange={onImageInputChange}
                isLoading={isLoading}
              />
            </Row>
          </Col>
        </Row>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </Form>
    </>
  )
}

export default CreateRealEstate
