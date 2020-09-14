import React from 'react';
import DiscoverSearch from '../../components/DiscoverSearch'
import BandSuggestion from '../../components/BandSuggestion';

function Discover(props) {

    return (
       <div>
            <DiscoverSearch />
            <BandSuggestion />
        </div>
    )
}

export default Discover;