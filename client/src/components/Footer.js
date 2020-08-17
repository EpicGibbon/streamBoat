import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {

    return(
        <footer className="mt-5 sticky-bottom">
            <Container fluid={true}>
                <Row className="fixed-bottom p-3" style={{backgroundColor: "#1B1C1D", color: "white"}}>
                    <Col className="p-0">
                    Copyright 2020 ©
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" style={{backgroundColor: "#1B1C1D", color: "white"}}>
                    This website was created by Cameron Graham & Anthony Aguiar
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}