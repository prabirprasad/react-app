import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';

import { FaUser } from "react-icons/fa";

// FaUser


function Navbar() {
    return (
        <div>
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <ReactBootStrap.Container>
            <ReactBootStrap.Row>
                <ReactBootStrap.Col xs={6} md={4}>
                <ReactBootStrap.Image src="newlogo.png" roundedCircle />
                </ReactBootStrap.Col> &nbsp;&nbsp;
            </ReactBootStrap.Row>
            <ReactBootStrap.Navbar.Brand href="/">MY FIRST REACT APP</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="me-auto">
                <ReactBootStrap.Nav.Link href="#administration">ADMINISTRATION</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#academic">ACADEMIC</ReactBootStrap.Nav.Link>
                <ReactBootStrap.NavDropdown title="DEPARTMENT" id="collasible-nav-dropdown">
                    <ReactBootStrap.NavDropdown.Item href="#physics">PHYSICS</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="#chemistry">CHEMISTRY</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="#mathematics">MATHEMATICS</ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
                <ReactBootStrap.Nav.Link href="/contactUs">CONTACT US</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                <ReactBootStrap.Nav.Link href="/login"><FaUser/>&nbsp;LOGIN</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
        </div>
    )
}

export default Navbar;
