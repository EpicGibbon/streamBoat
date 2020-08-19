import React from 'react';
import Hero from '../../components/Hero';
import CarouselTile from '../../components/CarouselTile'
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import AutoCompleteSearch from '../../components/AutoCompleteSearch'

function Discover(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Row lg={12}>
                <Col md={2}>
                    <AutoCompleteSearch />
                    <p>Search results can show here</p>
                </Col>
                <Col md={8} style={{ float: "right"}}>
                <CarouselTile />
                </Col>
            </Row>
        </div>
    )
}

export default Discover;