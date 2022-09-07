import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartWidget from './CartWidget';
import './navbar.module.css'
import {Link} from 'react-router-dom'

function TopNavbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">GamerLife</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to='/Productos/PlayStation'>PlayStation</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to='/Productos/Nintendo'>Nintendo</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to='/Productos/Xbox'>Xbox</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to='/Productos/Perifericos'>Perifericos</Link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>    
    );
}

export default TopNavbar