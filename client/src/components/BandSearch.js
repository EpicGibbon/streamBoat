import React from "react";

export const BandSearch = ({ artists }) => {
    return (
        <div>
            <h1>Bands:</h1>
            {artists.map((artist, i) => (
                <div key={i}>
                    <li>
                        {artist.name}
                    </li>
                </div>
            ))}
        </div>
    )
}