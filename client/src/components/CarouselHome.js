import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

class CarouselHome extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img height={350}
                        className="d-block w-100 text-center"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(4).jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={350}
                        className="d-block w-100 text-center"
                        src="https://www.childrensmuseum.org/sites/default/files/ExhibitsIconsPlaces_Carousel_Large_003.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={350}
                        className="d-block w-100"
                        src="https://www.onthewater.com/wp-content/uploads/2014/11/Best-New-Fishing-Boats-of-2020-800x600.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default CarouselHome;