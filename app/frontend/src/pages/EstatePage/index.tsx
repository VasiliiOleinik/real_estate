import { useEstatePage } from './useEstatePage'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Card,
  Col,
  Container,
  FormCheck,
  ListGroup,
  Row,
  Spinner,
} from 'react-bootstrap'
import ImageCarousel from '../../components/ImageCarousel'

const EstatePage = () => {
  const navigate = useNavigate()
  const { estate, isLoading } = useEstatePage()
  console.log('estate', estate)

  return isLoading ? (
    <Spinner animation="grow" />
  ) : (
    <Container>
      <Row>
        <Col xs={6}>
          <h1>{estate?.title}</h1>
        </Col>
        <Col xs={6} className="d-flex justify-content-end align-items-center">
          <Button type="button" variant="primary" onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </Col>
      </Row>
      <div style={{ width: '100%', height: '500px' }}>
        <ImageCarousel images={estate?.media_contains} />
      </div>
      <Card>
        <Card.Body>
          <Card.Title>
            {estate?.title} <b>({estate?.estate_status})</b>
          </Card.Title>
          <Card.Text>{estate?.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <b>Availability:</b> {estate?.availability}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Property type:</b> {estate?.property_type}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Building type:</b> {estate?.building_type}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Country:</b> {estate?.country}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Region:</b> {estate?.region}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Location details:</b> {estate?.location_details}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Energy level:</b> {estate?.energy_level}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Floor:</b> {estate?.floor}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Ownership:</b> {estate?.ownership}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Rooms:</b> {estate?.property_rooms}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Usefull area:</b> {estate?.usefull_area}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Infrastructure:</b>{' '}
            <div className="d-flex w-50 justify-content-between">
              <FormCheck
                type="checkbox"
                label="Pool"
                disabled
                checked={estate.infrastructure.pool}
              />
              <FormCheck
                type="checkbox"
                label="Garage"
                disabled
                checked={estate.infrastructure.garage}
              />
              <FormCheck
                type="checkbox"
                label="Parking"
                disabled
                checked={estate.infrastructure.parking}
              />
              <FormCheck
                type="checkbox"
                label="Garden"
                disabled
                checked={estate.infrastructure.garden}
              />
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Extra:</b>
            <div className="d-flex w-50 justify-content-between">
              <span>
                <b>Pool area:</b>
                {estate.extra.pool_area}
              </span>
              <span>
                <b>Garage area:</b>
                {estate.extra.garage_area}
              </span>
              <span>
                <b>Parking area:</b>
                {estate.extra.parking_area}
              </span>
              <span>
                <b>Garden area:</b>
                {estate.extra.garden_area}
              </span>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  )
}

export default EstatePage
