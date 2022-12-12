import React from "react";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// const { search } = useLocation();
// console.log(search);
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/">
                    Main
                </Link>
                <Link className="nav-item nav-link" to="/login">
                    Login
                </Link>

                <Link className="nav-item nav-link" to="/users">
                    Users
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
