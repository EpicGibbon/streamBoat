import React from 'react';
import { Header } from 'semantic-ui-react';
import BandRegisterForm from "../../components/BandRegisterForm";
import { useSelector } from "react-redux";
import API from '../../utils/API';

const RegisterBand = () => {

    const user = useSelector(state => state.auth.currentUser);
    console.log(user);
    const onFormSubmit = (formVal) => {
        console.log(formVal);
        
        const creator = user._id;
        console.log(creator);
        formVal.createdby = creator;
        // call in api function to post band info to db from formval
        API.saveBand(formVal)
        .then(() => {
            console.log("succes!");
            
        })
    }

    return (
        <div className="form-container">
            <Header as='h2' secondary="true" textAlign='center'>
                Register your band Here!

            </Header>
            <BandRegisterForm
                buttonText="Register Band"
                onSubmit={onFormSubmit}
            />
        </div>
    )
}
export default RegisterBand;