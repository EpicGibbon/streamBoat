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
                {bands.length ? (
                    <Container>
                        <h1 className="text-center">Suggested Bands:</h1>
                        {bands.map(band => {
                            return (
                                <Col md={12}>
                                    <Card className="text-center" key={band._id}>
                                        <Card.Img variant="top" src="#" />
                                        <Card.Title>
                                            <a href={"/artists/" + band._id}>
                                                <strong>
                                                    {band.bandname}
                                                </strong>
                                            </a>
                                        </Card.Title>
                                        <Card.Body>
                                            {band.description}
                                        </Card.Body>
                                        <Card.Footer>
                                            {band.bandemail}
                                            <button type="button" id="follow">Follow</button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Container>
                ) : (
                    <Container>
                        <h3 className="text-center">No bands to display</h3>
                    </Container>
                    )}
            </Row>
        </Container>
    );
}

export default BandSuggestion;