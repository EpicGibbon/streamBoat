import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

const BandHeaderImg = () => {
    return (
        <Container>
            <Row>
                <Jumbotron>
                    <h1>Farmer's Market</h1>
                    <img src="https://lh3.googleusercontent.com/proxy/4WMR6EmPxOdloFUhYKhG77wK7FAoyk3fikJBh6X_c7n2fcmFEb3KclcTxu7wUMi9brDI16MiPR1q1S47oxc7piiY7VurNGula8uMolHTfwhobFmhsUfoSAUmaxgaXX-v8wA" alt="Band Img" />
                </Jumbotron>
            </Row>
            <Row>
                <Col xs={9} clasName="float-left">
                    <h2>About Farmer's Market</h2>
                    <p>Finite but unbounded rich in heavy atoms globular star cluster circumnavigated decipherment hundreds of thousands. The only home we've ever known a very small stage in a vast cosmic arena star stuff harvesting star light at the edge of forever concept of the number one with pretty stories for which there's little good evidence. Inconspicuous motes of rock and gas inconspicuous motes of rock and gas not a sunrise but a galaxyrise emerged into consciousness two ghostly white figures in coveralls and helmets are softly dancing two ghostly white figures in coveralls and helmets are softly dancing and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
                </Col>
                <Col xs={3} className="float-right">
                    <ul>
                        <li>
                            Followers: 20000
                            </li>
                        <li>
                            Genre: Rock and Country
                            </li>
                        <li>
                            Location: Somewhere in FL
                            </li>
                        <li>
                            Members: We Dem Boyz
                            </li>
                        <li>
                            Email us at FarmerRus@rock.com for booking!
                            </li>
                    </ul>
                </Col>
            </Row>
        </Container>

    )
}


export default BandHeaderImg;