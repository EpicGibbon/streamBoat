import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../css/DiscoverSearch.css';
import { Multiselect } from 'multiselect-react-dropdown';
import { Form, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from "redux-form";
import { useDispatch  } from 'react-redux';
import API from '../utils/API'
const DiscoverSearch = (props) => {
    const dispatch = useDispatch();
    const multiSelect = ({ input }) => {
        let genres = [
            { name: "rock" }, { name: "Hip-Hop" }, { name: "Country" }, { name: "EDM" }, { name: "Blue Grass" },
            { name: "Blues" }, { name: "Classic Rock" }, { name: "Dance" }, { name: "Disco" }, { name: "Funk" }, { name: "Grunge" },
            { name: "Jazz" }, { name: "Metal" }, { name: "Other" }, { name: "Pop" }, { name: "R&B" },
            { name: "Rap" }, { name: "Reggae" }, { name: "Techno" }, { name: "Industrial" }, { name: "Alternative" }, { name: "Ska" },
            { name: "Death Metal" }, { name: "Soundtrack" }, { name: "Vocal" }, { name: "Fusion" }, { name: "Trance" }, { name: "Classical" },
            { name: "Instrumental" }, { name: "House" }, { name: "Gospel" }, { name: "Bass" }, { name: "Soul" }, { name: "Punk" }, { name: "Gothic" }, { name: "Electronic" },
            { name: "Tribal" }, { name: "Polka" }, { name: "Retro" }, { name: "HardRock" }, { name: "Folk" }, { name: "Tribal" }, { name: "Swing" }, { name: "Latin" }, { name: "Bluegrass" }, { name: "Celtic" }, { name: "Big Band" }, { name: "Slow Rock" }, { name: "Speech" }, { name: "Booty Bass" }, { name: "Tango" }, { name: "Samba" }, { name: "Duet" }, { name: "Punk Rock" }
        ]
        const onSelect = (selectedList, selectedItem) => {
            input.onChange(selectedList)
        }
        const onRemove = (selectedList, selectedItem) => {
            input.onChange(selectedList)
        }
        return (
            <Multiselect
                options={genres} // Options to display in the dropdown
                onSelect={onSelect} // Function will trigger on select event
                onRemove={onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
            />
        )
    }

const onFormSubmit = (formVal) => {
        console.log(formVal);
        API.searchGenre(
            formVal
        )
            .then((req, res) => console.log(res))
            // .then(() => loadBand())
            .catch(err => console.log(err))
    };
    return (
        <section id="search" className="section section-search blue accent-2 white-text center scrollspy">
            <Container>
                <Row>
                    <Col className="col-md-1">
                        <Button>Submit</Button>
                    </Col>
                    <Col className="col-md-5">
                        <div className="input field">
                            <input className="white grey-text autocomplete" placeholder="Search for a Band!" type="text" id="autocomplete-input" />
                        </div>
                    </Col>
                    <Col className="col-md-1">
                                <Button>GSubmit</Button>
                            </Col>
                    <Col className="col-md-5">
                        <Form onSubmit={props.handleSubmit(onFormSubmit)}>
                            <Field
                                autoComplete="chrome-off"
                                name="Genre"
                                component={multiSelect}
                            />
                        </Form >
                    </Col>
                </Row>
            </Container>
        </section >
    )
}
export default reduxForm({
    form: "discoverSearch"
})(DiscoverSearch)