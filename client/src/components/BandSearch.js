import React from "react";

export const BandSearch = ({ artists }) => {
    //Word keeps track of any change to the input in the filter box
    const [word, setWord] = useState("");

    //Filterdisplay will show the updated list based on search
    //its default state is our persons list prop
    const [filterDisplay, setFilterDisplay] = useState(props.artists);

    //this runs when a change is made in the input field
    const handleChange = e => {
        let oldList = props.persons.map(artist => {
            return { name: artist.name.toLowerCase() }
        })
    }
    //if the input bar is not empty, run the following

    //else if its empty, setFilterDisplay to the original list prop
    if (e !== "") {
        let newList = [];
        //SetWord keeps track of any change in the inout
        setWord(e);
        //Newlist is an array that holds the artists meeting the search criteria
        newList = oldList.filter(artist =>
            artist.name.includes(word.toLowerCase())
        );

        //we call setfilterdisplay to update the state each time the input is modified
        setFilterDisplay(newList);
    } else {
        //if the input isnt modified return the original list
        setFilterDisplay(newList);
    };

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