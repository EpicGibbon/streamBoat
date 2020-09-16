import React, {useEffect} from 'react';
import {Button, Header } from 'semantic-ui-react';
import EditUserForm from "../../components/EditUserForm";
// import { Link } from "react-router-dom";
import API from '../../utils/API';
import { useSelector } from "react-redux";
import history from "../../history"
import {LogoutUser} from "../../actions/authActions"
import { useState } from 'react';
// import { useDispatch } from "react-redux";

const EditProfile = () => {
    
    const user = useSelector(state => state.auth.currentUser);
    const [currentuser, clear] = useState([user])
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
    const stuff = localStorage.removeItem("token")
const deleteuser = () => {
    console.log(currentuser);
    alert(`Press "OK" to continue deleting your account`)
    clear([]);
    console.log(currentuser);
    localStorage.setItem("token", currentuser)
    API.deleteUser(user._id)
     .then(LogoutUser())
.then(window.location.reload())
  .then(history.push('/register'))    
   
    
   
} 
// useEffect(() => {
//     deleteuser();
//     }, []);


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
            <br/>
        </div>
    )
}
export default EditProfile;