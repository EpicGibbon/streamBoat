import React from 'react';
import '../css/Herosection.css'
import { Link } from 'react-router-dom';
import { Button, Icon } from "semantic-ui-react";
import { useSelector } from "react-redux";

const Hero = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const showLoginBtn = () => {
        if (!isAuthenticated) {
            return (
                <Button color="black" animated secondary>
                    <Button.Content visible>Login</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            )
        }
    }


    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop />
            <h1>StreamBoat AWAITS!</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Link to="/bandpage">
                <Button className="btns">
                    GET STARTED
                </Button>
                </Link>
                <Link to="/login">
                    {showLoginBtn()}
                </Link>
            </div>
        </div>
    )};
    
export default Hero;
