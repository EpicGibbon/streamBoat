import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import streamboat from '../images/streamboat.jpg'
import navlogo from '../images/navlogo.png'

class Hero extends React.Component {
    render() {
        let styles = {
            "backgroundImage": 'url(' +  navlogo + ')',
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden',
            "height": '200px'
            
        }
        return (
            <Jumbotron fluid style={styles}>
                <Container fluid={true}>
                    <Row className="justify-content-center">
                        <Col md={8} sm={10}>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default Hero;