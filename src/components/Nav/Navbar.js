import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './navbar.module.css'

function TopNavbar() {
    return (
        <div className='mainContainer'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">GamerLife</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Ayuda</Nav.Link>
                            <NavDropdown title="PlayStation" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Ps1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">PS2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Ps3</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Ps4</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Ps5</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            <NavDropdown title="Periféricos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Auriculares</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Mouse</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Teclado</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Nintendo" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Wii U</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Wii</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">GameCube</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">N64</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">SNES</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">NES</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">3DS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">DS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Game Boy</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            <NavDropdown title="Xbox" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Xbox</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Xbox 360</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Xbox One</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Xbox Series</NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <span className="material-icons">Carrito</span>
                <AiOutlineShoppingCart size={30} color="black" />
            </Navbar>
        </div>
    );
}

export default TopNavbar