import React from 'react';
import './Header.css'

const Header = () => {
    return (
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
        </div>
    );
};

export default Header;