import React, { useState , useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return (
   
    <Navbar expand="lg">
      <Container>
        {/* desktop menu */}
        <Navbar.Brand href="#home">
            <img src={" "} alt="Logo" />
        </Navbar.Brand>
       {/* mobile menu */}
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
         <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>    
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
                {/* <a href="#"><img src={''} alt="" /></a>
                <a href="#"><img src={''} alt="" /></a>
                <a href="#"><img src={''} alt="" /></a> */}
            </div>
            <button className="vvd" onClick={() => console.log('Clicked')}>
                <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}

export default NavBar
