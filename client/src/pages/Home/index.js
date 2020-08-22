import React from 'react'
import CarouselHome from '../../components/CarouselHome'
import Hero from '../../components/Hero'
import AboutSBoat from '../../components/AboutSBoat'
import Services from '../../components/Services'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Hero />
                <Services />
                <CarouselHome />
                <AboutSBoat />
            </div>
        )
    }
};

export default Home;
