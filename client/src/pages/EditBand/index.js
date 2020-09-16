import React, { useState } from 'react';
import { Header } from 'semantic-ui-react';
import EditBandForm from "../../components/EditBandForm";
import API from '../../utils/API';

const EditBand = () => {


    const [formObject, setFormObject] = useState({
        bandname: "",
        bandlocation: "",
        bandmembers: "",
        bandemail: "",
        bandgenre: [],
        description: "",
    })
    // ========Commented code should go in edit band form for preset values======
    // const [band, setBand] = useState([])
    // function loadBand() {
    //     API.getBand()
    //         .then(res =>
    //             setBand(res.data)
    //         )
    //         .catch(err => console.log(err));
    // }

    function handleFormSubmit(formVal) {
        // e.preventDefault();
        console.log(formVal);
        API.editBand({
            bandname: formObject.bandname,
            location: formObject.location,
            email: formObject.email,
            genre: formObject.genre,
            description: formObject.description
        })
            .then(() => setFormObject({
                bandname: "",
                location: "",
                email: "",
                genre: "",
                description: "",
            }))
            // .then(() => loadBand())
            .catch(err => console.log(err))
    };

    return (

        <div className="form-container">
            <Header as='h2' secondary="true" textAlign='center'>
                Edit Band info
            </Header>
            <EditBandForm
                buttonText="Save Changes"
                onSubmit={handleFormSubmit}
            />
        </div>
    )
}
export default EditBand;