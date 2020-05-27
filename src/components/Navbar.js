import React from "react";
import {NavLink} from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <img className="logo" src={require("../img/logo.png")} alt="Logo"/>
        <ul className="navbar-nav ml-5">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link">Main</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/about" className="nav-link">Info</NavLink>
            </li>
        </ul>
    </nav>
)