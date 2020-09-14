import React, { useState, useEffect } from 'react';
import { Col, Row, Container, Card } from 'react-bootstrap';
import API from '../utils/API';

function BandSuggestion(props) {

    //setting our components initial state
    const [bands, setBands] = useState([]);

    //Load all bands and store them with setBand
    useEffect(() => {
        loadBands()
    }, [])

    //Loads all bands and sets them to bands
    function loadBands() {
        API.getBands()
            .then(res =>
                setBands(res.data)
            )
            .catch(err => console.log(err));
    }

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <h1 className="text-center">Suggested Bands:</h1>
                    {bands.length ? (
                        // <List>
                        <Container>
                            {bands.map(band => {
                                return (
                                    <Card className="text-center" key={band._id}>
                                        <Card.Img variant="top" src="#" />
                                        <Card.Title>{band.bandname}</Card.Title>
                                        <Card.Body>
                                            <a href={"/artists/" + band._id}>
                                                <strong>
                                                    {band.description}
                                                </strong>
                                            </a>
                                        </Card.Body>
                                        <Card.Footer>
                                            {band.bandemail}
                                        </Card.Footer>
                                    </Card>
                                );
                            })}
                            {/* </List> */}
                        </Container>
                    ) : (
                            <h3 className="text-center">No bands to display</h3>
                        )}
                </Col>
            </Row>
        </Container>
    );
}

export default BandSuggestion;