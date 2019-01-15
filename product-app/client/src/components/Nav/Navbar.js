import React from "react";
import { NavLink } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import './Navbar.css';

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            isHide: false
        };
    };

    hideBar = () => {
        const { isHide } = this.state

        window.scrollY > this.prev ?
            !isHide && this.setState({ isHide: true })
            :
            isHide && this.setState({ isHide: false });

        this.prev = window.scrollY;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.hideBar);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.hideBar);
    }
    render() {
        let classHide = this.state.isHide ? 'hide' : '';
        return (
            <div className={"topbar "+classHide + " navbar z-depth-5 d-flex justify-content-between"}>
                <NavLink to="/" className="p-2 bd-highlight">
                    Home
                </NavLink>
                <NavLink to="/blog" className="p-2 bd-highlight">
                    Blog
                </NavLink>
                <NavLink to="/products" className="p-2 bd-highlight">
                    All Products
                </NavLink>
                <NavLink to="/profile" className="p-2 bd-highlight">
                    Profile
                </NavLink>
                <NavLink to="/cart" className="p-2 bd-highlight">
                    Cart
                </NavLink>
                {/* <input className="form-control form-control-dark w-25" type="text" placeholder="Search Products" aria-label="Search" /> */}
                {/* <a href="/" className="nav nav-link" data-hover="Match&rarr;&amp;&larr;Mix" data-active="Active!"><span>Mix&larr;&amp;&rarr;Match</span></a> */}
                <a href="#" className="nav nav-link">
                    <SignIn />
                </a>
            </div>
        )
    }
};

export default Navbar;