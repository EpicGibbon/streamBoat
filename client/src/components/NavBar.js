import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";
export const NavBar = () => {
    const { currentUser, isAuthenticated } = useSelector(state => state.auth)
console.log(currentUser);
    // helper to show links on Navbar if user is authenticated
    const showLinks = () => {
        if (isAuthenticated) {
            return (
                <>
                    <Link to="/dashboard" className="item">{currentUser.username}</Link>
                    <Logout />
                </>
            )
        } else {
            return (
                <>
                    <Link to="/login" className="item">Login</Link>
                    <Link to="/register" className="item">Register</Link>
                </>
            )
        }
    }
    return (
        <div className="ui inverted menu">
            <Link to="/" className="item">Home</Link>
            {isAuthenticated ? <Link to="/Discover" className="item">Discover</Link> : ""}
            <div className="right menu">
                {showLinks()}
            </div>
        </div>
    )
}
export default NavBar;
