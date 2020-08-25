import React, { useState, setState } from 'react';
import Hero from '../../components/Hero';
import CarouselTile from '../../components/CarouselTile'
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import DiscoverSearch from '../../components/DiscoverSearch'
import API from '../../utils/API';
import { Button } from 'semantic-ui-react';

function Discover(props) {

    return (
       <div>
            {/* <Hero /> */}
            <DiscoverSearch />
            {/* <CarouselTile /> */}
        </div>
    )
}

export default Discover;