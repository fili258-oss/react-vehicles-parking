import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Parking Software</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Vehiculos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Listado de vehiculos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Crear vehiculo
              </NavDropdown.Item>              
              
            </NavDropdown>
            <Nav.Link href="#link">Empleados</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
