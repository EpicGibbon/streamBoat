import React from 'react';
import { Header } from 'semantic-ui-react';
import EditUserForm from "../../components/EditUserForm";
// import { Link } from "react-router-dom";
import API from '../../utils/API';
import { useSelector } from "react-redux";

const EditProfile = () => {
    const user = useSelector(state => state.auth.currentUser);
    const onFormSubmit = (formVal) => {
        console.log(formVal);
        console.log(user._id);
        console.log(user);
        API.editUser(user._id, formVal)
        .then(() => {
            console.log("Yo you updated");
            console.log(user);
        })
    }
    const renderMessage = () => {
        console.log("YO");
    }

    return (

        <div className="form-container">
            <Header as='h2' secondary="true" textAlign='center'>
                Edit Account info
            </Header>
            <EditUserForm
            renderMessage={renderMessage}
                buttonText="Save Changes"
                onSubmit={onFormSubmit}
            />
            <br/>
        </div>
    )
}
export default EditProfile;