import React from 'react';
import Hero from '../../components/Hero';
import CarouselTile from '../../components/CarouselTile'
import Slider from "react-slick";

function Discover(props) {
    return(
        <div>
            <Hero title={props.title} />
            <CarouselTile />
            <p>
                Discover page works
            </p>
        </div>
    )
}

export default Discover;