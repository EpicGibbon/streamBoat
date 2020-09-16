import React from 'react'
import Hero from '../../components/Hero'
import Services from '../../components/Services'


class Home extends React.Component {
    render() {
        return (
            <div>
                <Hero />
                <Services />
            </div>
        )
    }
};

export default Home;
