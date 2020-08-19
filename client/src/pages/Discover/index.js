import React from 'react';
import Hero from '../../components/Hero';
import CarouselTile from '../../components/CarouselTile'
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import AutoCompleteSearch from '../../components/AutoCompleteSearch'
import SearchSeed from '../../components/SearchSeed';

function Discover(props) {
    return (
        <div>
            <Hero />
            <Row lg={12}>
                <Col md={2}>
                    <div className="App-Component">
                    <AutoCompleteSearch items={SearchSeed}/>
                    </div>
                </Col>
                <Col md={8} style={{ float: "right"}}>
                <CarouselTile />
                </Col>
            </Row>
        </div>
    )
}

export default Discover;