import React from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import './styles.navbar.css'

function NavBar() {
  return (
    <div className="container-fluid p-0">
        <Navbar bg="
         " expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Intro</Nav.Link>
            {/* <Nav.Protfolio href="#Resume">Protfolio</Nav.Protfolio>
            <Nav.Resume href="#Resume">Resume</Nav.Resume> */}

            </Nav>

        </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default NavBar;