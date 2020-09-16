import React from 'react';
import { Header } from 'semantic-ui-react';
import BandRegisterForm from "../../components/BandRegisterForm";
import { useSelector } from "react-redux";
import API from '../../utils/API';
import history from '../../history'

const RegisterBand = () => {

    const user = useSelector(state => state.auth.currentUser);
    const onFormSubmit = (formVal) => {
        const creator = user._id;
        formVal.createdby = creator;
        // call in api function to post band info to db from formval
        API.saveBand(formVal)
        .then(() => {
            console.log("success!");
            history.push('/discover');
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