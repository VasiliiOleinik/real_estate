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
          {estates?.map((estate: any, id: any) => (
            <Col sm={3} key={id} className="mb-4">
              <EstateCard {...estate} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}
