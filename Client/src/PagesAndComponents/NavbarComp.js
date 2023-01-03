import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'



const NavbarComp = (props) => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <LinkContainer to="/home">
                    <Navbar.Brand>ApartmentRP</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                    <LinkContainer to="/home">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/todo">
                        <Nav.Link>Todo</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/users">
                        <Nav.Link>Users</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Navbar.Text>
                    Welcome, {props.currentUser}
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}

export default NavbarComp