import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from "../../../Hooks/useAuth"

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
            <Container>
                <Navbar.Brand as={Link} to="/">Travel Blogs</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto d-flex justify-content-center align-items-center">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/blogs">Blogs</Nav.Link>
                        {user?.email && <Nav.Link as={NavLink} to="/dashBoard">Dashboard</Nav.Link>}
                        {user?.email && <Navbar.Text>
                            User: <a href="/" aria-disabled>{user?.displayName}</a>
                        </Navbar.Text>}
                        {user?.email ? <Nav.Link as={NavLink} onClick={logout} to="/" ><Button variant="secondary" className="btn btn-secondary">Logout</Button></Nav.Link>
                            :
                            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;