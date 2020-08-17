import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutSBoat() {

    return (
        <Container>
            <Row className="text center">
                <h1 size="huge"> About StreamBoat</h1>
                <p style={{ marginBottom: "5px" }}>This is a Boiler Plate MERN application with authentication using JSON Web Tokens.</p>
                <p style={{ margin: "5px 0 25px" }}>This APP was design to be used as a starting point for any developer looking to integrate authentication with a MERN application.</p>
            </Row>
        </Container>
    );
}