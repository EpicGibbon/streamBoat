import React from 'react';
import { Header, Message } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';

export const UserDashboard = () => {
    // access to the currentUser property from the auth reducer state
    const user = useSelector(state => state.auth.currentUser);
    const genres = JSON.stringify(user.favgenres)
    console.log(genres);
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> User Dashboard </Header>
                <p>This is a Protected Route</p>
                <p>Welcome {user ? user.username : ""}</p>
                <p>Your music preference: {user ? genres : ""}</p>
                <Link to="/registerBand">
                    <Button color="black" animated secondary>
                        <Button.Content visible>Register Band</Button.Content>
                    </Button>
                </Link>
            </Message>
        </>
    )
}

export default UserDashboard;
