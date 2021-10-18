import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from '../../../images/logo2.png';
import './Header.css';

const Header = () => {
  const {user, logOut} = useAuth();
  return (
    <div>
      <>
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
          <Container>
            <Link to="/home">
            <img  style={{height: '100px'}} src={logo} alt="" />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav className="nav-link">
              <Link to="/home">Home</Link>
              <Link to="/services">Services</Link>
              {user.email && <span style={{color: 'white', marginRight:'10px'}}>Hello {user.displayName} </span>}
              {user.email ?
              <Button variant="dark" onClick={logOut}>Log out</Button>
              :
              <Link to="/login">Login</Link>}
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
