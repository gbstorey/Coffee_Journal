import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";

const NavbarBS = () => {
 return (<div>
    <Container>
       <Navbar className="navbar-header" expand="lg">
       <Container>
        <Navbar.Brand href="#home">
         <h1 className="navbar-brand__text">Experience Coffee</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
    </Container>
   </div>);
};

export default NavbarBS;
