import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.png';

const MyNavbar = () => {
    return (
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="container-fluid d-flex flex-row justify-content-between">
            <Navbar.Brand href="#"><img src={logo} /></Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav d-flex flex-row justify-content-end">
              <Nav className="">
                <Nav.Link href="#home" className='fs-4'>Home</Nav.Link>
                <Nav.Link href="#menu" className='fs-4'>Menu</Nav.Link>
                <Nav.Link href="#about" className='fs-4'>AboutUs</Nav.Link>
                <Nav.Link href="#contact" className='fs-4'>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    );
}

export default MyNavbar;