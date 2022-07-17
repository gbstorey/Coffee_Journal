import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";

const NavbarBS = () => {
 return (<div>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
         <h1 className="navbar-brand__text">Aroma</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
   </div>);
};

export default NavbarBS;
