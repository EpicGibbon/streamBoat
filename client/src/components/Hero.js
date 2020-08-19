import React from 'react';
import { Button } from 'semantic-ui-react';
import '../css/Herosection.css'

class Hero extends React.Component {
    render() {
        // let styles = {
        //     "backgroundImage": 'url(' +  navlogo + ')',
        //     backgroundSize: 'cover', 
        //     backgroundPosition: 'center center',
        //     backgroundRepeat: 'no-repeat',
        //     overflow: 'hidden',
        //     "height": '200px'

        // }
        return (
            <div className='hero-container'>
                <video src="/videos/video-1.mp4" autoPlay muted loop />
                <h1>StreamBoat AWAITS!</h1>
                <p>What are you waiting for?</p>
                <div className="hero-btns">
                    <Button className="btns" buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        GET STARTED
                    </Button>
                </div>
            </div>
        );
    }
}

export default Hero;