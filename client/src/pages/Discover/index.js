import React from 'react';
import Hero from '../../components/Hero';

function Discover(props) {
    return(
        <div>
            <Hero title={props.title} />
            <p>
                Discover page works
            </p>
        </div>
    )
}

export default Discover;