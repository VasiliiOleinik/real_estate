import { useHome } from './useHome'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import EstateCard from '../../components/EstateCard.tsx'

export const Home = () => {
  const { isLoading, estates } = useHome()
  console.log(estates)

  return (
    <Container>
      <h1 className="mb-4">Home</h1>
      {isLoading ? (
        <Spinner animation="grow" />
      ) : (
        <Row>
          {estates?.map((estate, id) => (
            <Col sm={2} key={id}>
              <EstateCard {...estate} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}
