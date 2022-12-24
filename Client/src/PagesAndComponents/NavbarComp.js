import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';




const NavbarComp = () => {
    return (
        <Navbar bg="light" expand="sm">
            <Container>
                <Navbar.Brand href="/">LandLordRP</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link to="/">{''}
                        <Link className='text-decoration-none text-black' to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link to="/todo">{''}
                        <Link className='text-decoration-none text-black' to="/todo">Todo</Link>
                    </Nav.Link>
                    <Nav.Link to="/users">{''}
                        <Link className='text-decoration-none text-black' to="/users">Users</Link>
                    </Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    )
}

export default NavbarComp