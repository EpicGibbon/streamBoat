import React from 'react';
import BandHeader from '../../components/BandHeaderImg'
import BandMerch from '../../components/BandMerch'
import AboutMe from '../../components/AboutMe'
import Row from 'react-bootstrap/Row'


class BandPage extends React.Component {
    render() {
        return (
            <div>
                <BandHeader />
                <Row>
                    <BandMerch md={3} style={{display: 'inline-block'}}/>
                </Row>
                <AboutMe />
            </div>
        )
    }
}

export default BandPage;