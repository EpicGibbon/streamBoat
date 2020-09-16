import React, { useEffect } from 'react';
import { Button, Header } from 'semantic-ui-react';
import EditUserForm from "../../components/EditUserForm";
import API from '../../utils/API';
import { useSelector } from "react-redux";
import history from "../../history"
import { LogoutUser } from "../../actions/authActions"
import { useState } from 'react';

const EditProfile = () => {

    const user = useSelector(state => state.auth.currentUser);
    const [currentuser, clear] = useState([user])
    const [userinfo, setuserinfo] = useState([])
    const onFormSubmit = (formVal) => {
        
        setuserinfo(formVal)
       
        API.editUser(user._id, userinfo)
            .then(() => {
                console.log("Successful Update");
                history.push('/dashboard')
            })
    }

    const renderMessage = () => {
        console.log("Message Rendered");
    }
    const deleteuser = () => {
        //Replace alert with model down the road
        alert(`Press "OK" to continue deleting your account`)
        clear([]);
        localStorage.setItem("token", currentuser)
        API.deleteUser(user._id)
            .then(LogoutUser())
            .then(window.location.reload())
            .then(history.push('/register'))
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
            <Button onClick={deleteuser}>
                <Button.Content>Delete Account</Button.Content>
            </Button>
            <br />
        </div>
    )
}
export default EditProfile;