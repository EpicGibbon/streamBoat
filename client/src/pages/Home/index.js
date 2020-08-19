import React from 'react'
import CarouselHome from '../../components/CarouselHome'
import Hero from '../../components/Hero'
import AboutSBoat from '../../components/AboutSBoat'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Hero />
                <CarouselHome />
                <AboutSBoat />
            </div>
        )
    }
};

export default Home;
