import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand style={{ color: 'White' }} href="/home">FOOD-PAIR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink
                            className="menu"
                            to="/home"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className="menu"
                            to="/resturant"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Resturant
                        </NavLink>
                        <NavLink
                            className="menu"
                            to="/about"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            About
                        </NavLink>
                        <NavLink
                            className="menu"
                            to="/bufe"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Bufe
                        </NavLink>
                        {user.email ? <Link to="/about">
                            <button onClick={logOut} className="custom-btn mealdb-btn">Sign out</button>
                        </Link> : <Link to="/signin">
                            <button className="custom-btn mealdb-btn">Sign In</button>
                        </Link>}
                        {user.email && <Link to="/signin">
                            <img className="user-img" src={user?.photoURL} alt="" />
                        </Link>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

/*
<div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/home">FOOD PAIR</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-2">
                                <a className="nav-link" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/recipies">Our Recipies</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/about">About Us</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/order">Order</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <form className="d-flex w-50 mx-auto my-2">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn custom-btn" type="submit">Search</button>
            </form>
        </div> */