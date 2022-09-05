import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartWidget from './CartWidget';
import './navbar.module.css'
import {Link} from 'react-router-dom'

function TopNavbar() {
    return (
        <div className='mainContainer'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">GamerLife</Navbar.Brand>
                        <Link to="/">Home</Link>
                        <Link to="/category/Ayuda">Ayuda</Link>
                        <Link to="/category/PlayStation">PlayStation</Link>
                        <Link to="/category/Nintendo">Nintendo</Link>
                        <Link to="/category/Xbox">Xbox</Link>
                        <NavDropdown title="Periféricos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Auriculares</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Mouse</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Teclado</NavDropdown.Item>
                        </NavDropdown>      
                </Container>
                <Link to='/cart'><CartWidget />
                    <AiOutlineShoppingCart size={30} color="black" />
                </Link>
                
            </Navbar>
            
        </div>
    );
}

export default TopNavbar