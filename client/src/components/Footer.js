import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {

    return(
        <footer className="mt-5 sticky-bottom">
            <Container fluid={true}>
                <Row className="fixed-bottom p-3">
                    <Col className="p-0">
                    Cameron Graham & Anthony Aguiar
                    </Col>
                    <Col className="p-0 d-flex justify-content-end">
                    This website was created by Cameron Graham & Anthony Aguiar
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}