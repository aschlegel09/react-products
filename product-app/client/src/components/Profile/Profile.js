import React from "react";
import { NavLink } from 'react-router-dom';

function Profile() {
    return (
        <div>
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/one">Link 1</NavLink>
                    </li>
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    Products
                    </h6>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/two">Link 2</NavLink>
                    </li>
                </ul>
            </div>
            <div className="content">
                Dummy
                </div>
        </div>
    )
};

export default Profile;