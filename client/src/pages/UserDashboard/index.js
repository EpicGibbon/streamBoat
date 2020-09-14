import React, { useState, useEffect } from 'react';
import { Header, Message } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import API from '../../utils/API';
// import React, { useState } from 'react';

export const UserDashboard = () => {
    // access to the currentUser property from the auth reducer state
    const { currentUser } = useSelector(state => state.auth)
    const [bands, setBands] = useState([]);
    console.log(currentUser);
    const genreArray = (currentUser.favgenres)
    const renGenre = genreArray.map((genre, index) => {
        console.log(genre);
        return (
            <a key={`${genre.name}`}>
                {`${genre.name} `}
            </a>
        );
    })
    const getBands = () => {
        API.getUserArtists(currentUser._id)
            .then((res) => {
                const bandArray = res.data
                setBands(bandArray)
                console.log(bandArray);
            })
    }
    useEffect(() => {
    getBands();
    }, []);



    return (
        <div className="container">
            <div className="row d-flex justify-content-center">

                <Message className="message-container" size="huge" secondary="true">
                    <Header size="huge"> User Dashboard </Header>
                    <p>Welcome {currentUser ? currentUser.username : ""}</p>
                </Message>
            </div>
            <div className="row">
                <div className="col-sm-4 float-left border border-dark">
                    <p>Name: {currentUser.firstname} {currentUser.lastname}</p>
                    <p>Favorite Genres: {renGenre}</p>
                    <p>Follow Count: (following/followers)</p>
                    <p>About {currentUser.username}: {currentUser.description}</p>
                    <p>Email: {currentUser.email} </p>
                    <p>Member of:    {bands.map(band => (
                        <li key={band.id}>{band.bandname}</li>
                    ))} </p>

                    <Link to="/registerBand">
                        <Button color="black" animated secondary>
                            <Button.Content visible>Register Your Band</Button.Content>
                        </Button>
                    </Link>
                    
                    <Link to="/imageUpload">
                        <Button color="black" animated secondary>
                            <Button.Content visible>Upload an image</Button.Content>
                        </Button>
                    </Link>
                    <Link to="/editProfile">
                        <Button color="black" animated secondary>
                            <Button.Content visible>Edit your Profile</Button.Content>
                        </Button>
                    </Link>
                </div>
                <div className="col-sm-8 float-right">
                    User Posts
                </div>
                <div className="row">
                    <div className="col-sm-8 float-right">
                        Following Band Posts
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;
