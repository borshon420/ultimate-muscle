import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../../images/logo2.png';

const Header = () => {
  return (
    <div>
      <>
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
          <Container>
            <img style={{height: '100px'}} src={logo} alt="" />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Services</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
