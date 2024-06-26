import React from 'react'
import { Navbar, Container, Nav, Badge, Image, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { getCookie, setCookie } from '../../utils/cookies'
import { jwtDecode } from 'jwt-decode'
import { logout } from '../../api/logout'

const Navigation = () => {
  const user = jwtDecode(getCookie('token'))
  const { first_name, last_name, avatar } = user
  function getClassNames(isActive: boolean) {
    return isActive ? 'nav-link active' : 'nav-link'
  }

  function logOut() {
    logout()
    setCookie('token', null)
    window.location.href = '/login'
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-4">
      <Container className="d-flex justify-between">
        <div className="d-flex align-center">
          <Navbar.Brand href="/">Real Estate</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/"
                className={({ isActive }) => getClassNames(isActive)}
              >
                Home
              </NavLink>
              <NavLink
                to="/create-estate"
                className={({ isActive }) => getClassNames(isActive)}
              >
                Create estate
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>

        <div className="d-flex align-items-center">
          <Image src={avatar} roundedCircle width={30} height={30} />
          <NavLink to="/user">
            <Badge bg="warning" text="dark" className="ms-2">
              {first_name} {last_name}
            </Badge>
          </NavLink>

          <Button variant="outline-danger" className="ms-2" onClick={logOut}>
            Logout
          </Button>
        </div>
      </Container>
    </Navbar>
  )
}

export default Navigation
