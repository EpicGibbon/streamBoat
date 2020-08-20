import React from 'react';
import BandHeader from '../../components/BandHeaderImg'
import AboutMe from '../../components/AboutMe'

class BandPage extends React.Component {
    render() {
        return (
            <div>
                <BandHeader />
                <AboutMe />
            </div>
        )
    }
}

export default BandPage;