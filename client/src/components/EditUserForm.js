import React, { useState, useEffect} from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Segment, Label } from 'semantic-ui-react';
import { Field, reduxForm } from "redux-form";
import { clearErrors } from "../actions/authActions";
// import API from '../utils/API';
import { Link } from 'react-router-dom';

const EditUserForm = (props) => {
    const user = useSelector(state => state.auth.currentUser);
    const error = useSelector(state => state.errors);
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {

        if (error.message) {
            setErrorMessage(error.message)
            dispatch(clearErrors())
        }
    }, [error])

    const multiInput = ({ input }) => {
        let genres = [
            { name: "rock" }, { name: "Hip-Hop" }, { name: "Country" }, { name: "EDM" }, { name: "Blue Grass" },
            { name: "Blues" }, { name: "Classic Rock" }, { name: "Dance" }, { name: "Disco" }, { name: "Funk" }, { name: "Grunge" },
            { name: "Jazz" }, { name: "Metal" }, { name: "Other" }, { name: "Pop" }, { name: "R&B" },
            { name: "Rap" }, { name: "Reggae" }, { name: "Techno" }, { name: "Industrial" }, { name: "Alternative" }, { name: "Ska" },
            { name: "Death Metal" }, { name: "Soundtrack" }, { name: "Vocal" }, { name: "Fusion" }, { name: "Trance" }, { name: "Classical" },
            { name: "Instrumental" }, { name: "House" }, { name: "Gospel" }, { name: "Bass" }, { name: "Soul" }, { name: "Punk" }, { name: "Gothic" }, { name: "Electronic" },
            { name: "Tribal" }, { name: "Polka" }, { name: "Retro" }, { name: "HardRock" }, { name: "Folk" }, { name: "Tribal" }, { name: "Swing" }, { name: "Latin" }, { name: "Bluegrass" }, { name: "Celtic" }, { name: "Big Band" }, { name: "Slow Rock" }, { name: "Speech" }, { name: "Booty Bass" }, { name: "Tango" }, { name: "Samba" }, { name: "Duet" }, { name: "Punk Rock" }
        ]
        const onSelect = (selectedList, selectedItem) => {
            input.onChange(selectedList)
        }
        const onRemove = (selectedList, selectedItem) => {
            input.onChange(selectedList)
        }
        return (
            <Multiselect
                options={genres} // Options to display in the dropdown
                selectedValues={user.favgenres} // Preselected value to persist in dropdown
                onSelect={onSelect} // Function will trigger on select event
                onRemove={onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options            
            />
        )



    }
    return (
        <>
            <Form onSubmit={props.handleSubmit(props.onSubmit)} size='large'>
                <Segment>
                    <Field
                        name="firstname"
                        component={renderInput}
                        label={user.firstname}
                    />
                    <Field
                        name="lastname"
                        component={renderInput}
                        label={user.lastname}
                    />
                    <Field
                        name="username"
                        component={renderInput}
                        label={user.username}
                    />
                    <Field
                        name="email"
                        component={renderInput}
                        label={user.email}
                    />
                    {errorMessage ? <Label className="alertMssg" basic color='red'>{errorMessage}</Label> : ""}
                    <Field
                        name="favgenres"
                        autoComplete="chrome-off"
                        component={multiInput}
                    />
                    <Field
                        name="description"
                        component={renderInput}
                        label={user.description}
                    />
                    <Button secondary fluid size='large'>
                        {props.buttonText}
                    </Button>
                </Segment>
            </Form>
            <Button inverted color="red" animated secondary>
                    <Button.Content visible>Delete Account</Button.Content>
                </Button>
        </>
    )
}

const renderInput = ({ input, label, meta }) => {

    const selectIcon = () => {

        if (input.name === "email" || input.name === "firstname" || input.name === "lastname" || input.name === "username") {
            return "user icon"
        } else {
            return "lock icon"
        }

    }
    return (

        <div className="field">
            <div className="ui fluid left icon input">
                <input {...input} placeholder={label} autoComplete="chrome-off" type={`${input.name !== "password" ? "text" : "password"}`} />
                <i aria-hidden="true" className={selectIcon()}></i>
            </div>
        </div>
    )
}
export default reduxForm({
    form: "edituserform"
})(EditUserForm)