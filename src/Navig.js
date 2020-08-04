import React from 'react';

import './App.css';
import logo1 from './logo1.svg';
import logo2 from './logo1.png';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 

function Navig() {
  return (
<Navbar expand="lg">
  <Navbar.Brand href="./projects">
      <img
        src={logo2}
        width="80"
        height="80"
        className="d-inline-block align-top App-logo"
        alt=""
      />
  </Navbar.Brand>
  <Navbar.Brand href="./projects" className="name header">Savannah Evans</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto nav-links header">
      <Nav.Link href="./projects">projects</Nav.Link>
      <Nav.Link href="./about">about</Nav.Link>
      <Nav.Link href="files/Savannah_Evans_Resume2020.pdf" target="_blank">resume</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
  );
}

export default Navig;




