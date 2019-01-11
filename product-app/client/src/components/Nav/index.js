import React from "react";
import { NavLink } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';

function Navbar() {
    return (
        <div className="navbar z-depth-5 d-flex justify-content-between">
            <NavLink to="/" className="p-2 bd-highlight">
            E-Commerce w/ React
            </NavLink>
            <input className="form-control form-control-dark w-25" type="text" placeholder="Search Products" aria-label="Search" />
            {/* <a href="/" className="nav nav-link" data-hover="Match&rarr;&amp;&larr;Mix" data-active="Active!"><span>Mix&larr;&amp;&rarr;Match</span></a> */}
            
            <NavLink to="/signin" className="nav nav-link">
            <SignIn>
            Sign In
            </SignIn>
            </NavLink>

            <NavLink to="/logout" className="nav nav-link">
            Sign Out
            </NavLink>
        </div>
    )
};

export default Navbar;