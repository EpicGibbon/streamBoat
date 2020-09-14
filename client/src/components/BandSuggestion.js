import React, { useState, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap'
import API from '../utils/API'
import { List, ListItem} from '../components/List'

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
                        <List>
                            {bands.map(band => {
                                return (
                                    <ListItem key={band._id}>
                                        <a href={"/artists/" + band._id}>
                                            <strong>
                                                {band.bandname} and their email is {band.bandemail}
                                            </strong>
                                        </a>
                                    </ListItem>
                                );
                            })}
                        </List>
                    ) : (
                            <h3>No bands to display</h3>
                        )}
                </Col>
            </Row>
        </Container>
    );
}

export default BandSuggestion;