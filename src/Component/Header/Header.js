import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home"><h1 className="text-success">Ed Tech</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home"><i className="fas fa-home"></i> HOME</Nav.Link>
                            <Nav.Link as={HashLink} to="/service"><i class="fas fa-graduation-cap"></i> SERVICE</Nav.Link>
                            <Nav.Link as={HashLink} to="/admission"><i class="fas fa-users"></i> ADMISSION</Nav.Link>
                        </Nav>

                        <Nav>
                        {user?.email ?
                                <Button onClick={logout} variant="dark">LOGOUT</Button> :
                                <>
                                <Nav.Link as={HashLink} to="/login">LOGIN</Nav.Link>
                                </>} 
                                
                                <Navbar.Text>
                            Signed in :  <a href="/login">{user?.displayName}</a>
                        </Navbar.Text>
                        <Navbar.Brand href="/home" className='ms-2'>
                                            <img
                                            alt=""
                                            src={user?.photoURL}
                                            width="40"
                                            height="40"
                                            className="d-inline-block align-top"
                                            />
                        </Navbar.Brand>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
                        
        </div>
    );
};

export default Header;