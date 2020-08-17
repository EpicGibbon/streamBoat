import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

export const NavBar = () => {

    const { currentUser, isAuthenticated } = useSelector(state => state.auth)

    // helper to show links on Navbar if user is authenticated
    const showLinks = () => {
        if (isAuthenticated) {
            return (
                <>
                    <Link to="/dashboard" className="item">{currentUser.email}</Link>
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
            {isAuthenticated ? <Link to="/BandPage" className="item">Search</Link> : ""}
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            <div className="right menu">
                {showLinks()}
            </div>
        </div>
    )
}

export default NavBar;
