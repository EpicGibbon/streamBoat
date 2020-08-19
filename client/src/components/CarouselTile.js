import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RocknRoll from '../images/RocknRoll.jpg'
import HipHop from '../images/HipHop.jpg'
import CountryMusic from '../images/CountryMusic.png'
import MetalMusic from '../images/MetalMusic.jpeg'
import PopMusic from '../images/PopMusic.jpg'
import { Container } from "semantic-ui-react";

export default class CarouselTile extends Component {
    render() {
        const settings = {
            className: "center",
            infinite: true,
            centerPadding: "50px",
            slidesToShow: 1,
            speed: 500,
            rows: 2,
            slidesPerRow: 2,
            dots: true,
            arrows: true,
            focusOnSelect: true
        };
        return (
            <Container style={{ backgroundColor: "#404245" }}>
                <h2>Genres</h2>
                <Slider {...settings}>
                    <div>
                        <img height={200} width={250}
                            className="d-block w-100 text-center"
                            src={RocknRoll}
                            alt="First slide"
                        />
                    </div>
                    <div>
                        <img height={200} width={250}
                            className="d-block w-100 text-center"
                            src={HipHop}
                            alt="First slide"
                        />
                    </div>
                    <div>
                        <img height={200} width={250}
                            className="d-block w-100 text-center"
                            src={CountryMusic}
                            alt="First slide"
                        />
                    </div>
                    <div>
                        <img height={200} width={250}
                            className="d-block w-100 text-center"
                            src={MetalMusic}
                            alt="First slide"
                        />
                    </div>
                    <div>
                        <img height={200} width={250}
                            className="d-block w-100 text-center"
                            src={PopMusic}
                            alt="First slide"
                        />
                    </div>
                    <div>
                        <img height={200} width={250}
                            className="d-block w-100 text-center"
                            src={MetalMusic}
                            alt="First slide"
                        />
                    </div>
                    <div>
                        <img height={200} width={250}
                            className="d-block w-100 text-center"
                            src={CountryMusic}
                            alt="First slide"
                        />
                    </div>
                    <div>
                        <img height={200} width={250}
                            className="d-block w-100 text-center"
                            src={MetalMusic}
                            alt="First slide"
                        />
                    </div>
                    <div>
                        <img height={200} width={250}
                            className="d-block w-100 text-center"
                            src={HipHop}
                            alt="First slide"
                        />
                    </div>
                    <div>
                        <img height={200} width={250}
                            className="d-block w-100 text-center"
                            src={RocknRoll}
                            alt="First slide"
                        />
                    </div>
                </Slider>
            </Container>
        );
    }
}