
import React, { useState, useEffect } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Message, Segment, Label } from 'semantic-ui-react';
import { Field, reduxForm } from "redux-form";
import { clearErrors } from "../actions/authActions";

const RegisterForm = (props) => {
    console.log(props);
    const error = useSelector(state => state.errors);
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch();
    useEffect(() => {

        if (error.message) {
            setErrorMessage(error.message)
            dispatch(clearErrors())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error])

    return (
        <>
            <Form onSubmit={props.handleSubmit(props.onSubmit)} size='large'>
                <Segment>
                    <Field
                        name="firstname"
                        component={renderInput}
                        label="Enter First Name"
                    />
                    <Field
                        name="lastname"
                        component={renderInput}
                        label="Enter Last name"
                    />
                    <Field
                        name="username"
                        component={renderInput}
                        label="Username"
                    />
                    <Field
                        name="email"
                        component={renderInput}
                        label="E-mail address"
                    />
                    {errorMessage ? <Label className="alertMssg" basic color='red'>{errorMessage}</Label> : ""}
                    <Field
                        name="password"
                        component={renderInput}
                        label="Password"
                    />
                    <Field
                        name="favgenres"
                        autoComplete="chrome-off"
                        component={multiInput}
                        label="genres"
                    />
                     <Field
                        name="description"
                        component={renderInput}
                        label="About You"
                    />
                        <Button secondary fluid size='large'>
                            {props.buttonText}
                        </Button>
                </Segment>
            </Form>
            <Message>
                {props.renderMessage()}
            </Message>
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

const multiInput = ({ input }) => {
    let genres = [
        { name: "Rock" }, { name: "Hip-Hop" }, { name: "Country" }, { name: "EDM" }, { name: "Blue Grass" },
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
            // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options

        />

    )
}

export default reduxForm({
    form: "registerform"
})(RegisterForm)