import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class BandHeader extends React.Component {
render() {
    return (
        <Jumbotron>
            <h1>Band Name:</h1>
            <img src="#" alt="Band Img"></img>
        </Jumbotron>
    )
}
}

export default BandHeader;