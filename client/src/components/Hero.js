import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import streamboat from '../images/streamboat.jpg'

class Hero extends React.Component {
    render() {
        let styles = {
            "backgroundImage": 'url(' +  streamboat + ')',
            "height": '200px',
            
        }
        return (
            <Jumbotron fluid style={styles}>
                <Container fluid={true}>
                    <Row className="justify-content-center">
                        <Col md={8} sm={10}>
                            <p>Hero works</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default Hero;