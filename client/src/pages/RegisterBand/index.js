import React from 'react';
import { Header } from 'semantic-ui-react';
import BandRegisterForm from "../../components/BandRegisterForm";

const RegisterBand = () => {

    const onFormSubmit = (formVal) => {
        console.log(formVal);
        // call in api function to post band info to db from formval
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