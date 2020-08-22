import React, { useEffect, useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import API from '../utils/API';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import '../css/AboutMeContainer.css'
import DeleteBtn from '../components/DeleteBtn'

function AboutMe() {

    const [artists, setArtists] = useState([])
    //load all the artists and store them with setArtists
    useEffect(() => {
        loadArtists()
    }, [])

    //loads all artists and sets them to artists
    const loadArtists = () => {
        API.getBands()
            .then((res) => {
                const bandarray = [];

                console.log(res.data);
                res.data.forEach(band => {
                    bandarray.push(band.name);
                    console.log(bandarray);
                    setArtists(bandarray);
                    console.log(artists);
                    ;
                });

            }
            )
            .catch(err => console.log(err));
    }

    //       Deletes a book from the database with a given id, then reloads books from the db
    function deleteArtists(id) {
        API.deleteArtists(id)
            .then(res => loadArtists())
            .catch(err => console.log(err));
    }

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h2>Some info for the DB:</h2>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Artist:</Form.Label>
                                <Form.Control name="Artist" onChange={() => { }} placeholder="Artist" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Genre</Form.Label>
                                <Form.Control name="Genre" onChange={() => { }} placeholder="Genre" />
                                <Button variant="primary" onClick={loadArtists}
                                >
                                    Submit
                        </Button>
                            </Form.Group>
                        </Form>
                    </Jumbotron>
                </Col>
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Search results:</h1>
                    </Jumbotron>
                    {/* {artists.length ? ( */}
                    <ul>
                        <li>{artists.bandname}</li>
                        <DeleteBtn onClick={() => deleteArtists(artists._id)} />
                        {/* {artists.map(artist => {
                                return (
                                    <p key={artist._id}>
                                        <a href={"/artists/" + artist.id}>
                                            <strong>
                                                {artist.title} and {artist.genre}
                                            </strong>
                                        </a>
                                    </p>
                                );
                            })} */}
                    </ul>
                    {/* //     ) : ( */}
                    <h3>no results to display</h3>
                    {/* //         )} */}
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe;