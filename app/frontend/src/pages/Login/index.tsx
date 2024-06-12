import { useState } from 'react'
import { login } from '../../api/login'
import { useMutation } from 'react-query'
import { setCookie } from '../../utils/cookies'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/esm/Form'
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<{
    username: string
    password: string
  }>({
    username: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value }: { name: string; value: string } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.access_token) {
        setCookie('token', data.access_token)
        navigate('/')
      }
    },
  })

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate(formData)
  }

  return (
    <Container className="p-5">
      <Row className="justify-content-center">
        <Col lg="6" className="bg-light p-3 rounded-3">
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
