import React from 'react';
import { Header } from 'semantic-ui-react';
import RegisterForm from "../../components/RegisterForm";
import { Link } from "react-router-dom";
import API from '../../utils/API';


const EditProfile = () => {

    const onFormSubmit = (formVal) => {
        console.log(formVal);
        API.editUser()
    }

    return (

        <div className="form-container">
            <Header as='h2' secondary="true" textAlign='center'>
                Edit Account info
            </Header>
            <RegisterForm
                buttonText="Save Changes"
                onSubmit={onFormSubmit}
            />
        </div>
    )
}
export default EditProfile;