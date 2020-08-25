import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import '../css/DiscoverSearch.css'

export default class Search extends Component {
    render() {
        return (
            <section id="search" className="section section-search blue accent-2 white-text center scrollspy">
                <Container>
                    <Row>
                        <Col s12>
                            <div className="input field">
                                <input className="white grey-text autocomplete" placeholder="Search for a Band!" type="text" id="autocomplete-input" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
        )
    }
}