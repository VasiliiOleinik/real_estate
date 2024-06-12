import { Button, Card, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function EstateCard({
  media_contains,
  title,
  country,
  region,
  price,
  estate_status,
  property_type,
  id,
}: any) {
  const navigate = useNavigate()

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={media_contains[0]} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Type: {property_type}</ListGroup.Item>
        <ListGroup.Item>Status: {estate_status}</ListGroup.Item>
        <ListGroup.Item>Price: {price}</ListGroup.Item>
        <ListGroup.Item>
          Location: {country}, {region}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button
          variant="primary"
          type="button"
          onClick={() => navigate(`/${id}`)}
        >
          Open
        </Button>
      </Card.Body>
    </Card>
  )
}
