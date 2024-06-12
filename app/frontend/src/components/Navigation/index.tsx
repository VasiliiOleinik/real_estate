import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  function getClassNames(isActive: boolean) {
    return isActive ? 'nav-link active' : 'nav-link'
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-4">
      <Container>
        <Navbar.Brand href="#home">Real Estate</Navbar.Brand>
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
      </Container>
    </Navbar>
  )
}

export default Navigation
