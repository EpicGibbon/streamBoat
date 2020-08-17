import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

export default function AboutSBoat() {

    return (
        <Container>
            <br></br>
            <Row className="text center">
                <Col>
                    <Card style={{ width: '18rem', bg: "second" }}>
                        <Card.Body>
                            <Card.Title>About StreamBoat</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Creators:</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <p style={{ margin: "5px 0 25px" }}>This APP was design to be used as a starting point for any developer looking to integrate authentication with a MERN application.</p>
                </Col>
            </Row>
        </Container>
    );
}