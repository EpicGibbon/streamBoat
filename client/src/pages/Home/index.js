import React from 'react'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import DiscoverSearch from '../../components/DiscoverSearch'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Hero />
                <Services />
                <DiscoverSearch />
            </div>
        )
    }
};

export default Home;
