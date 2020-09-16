
import React, { useState, useEffect } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Segment, Label } from 'semantic-ui-react';
import { Field, reduxForm } from "redux-form";
import { clearErrors } from "../actions/authActions";
import API from '../utils/API';
import { Link } from 'react-router-dom';

const EditBandForm = (props) => {
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

    const getBands = () => {
        API.getUserArtists(user._id)
            .then((res) => {
                console.log(res);
                const bands = res.data
                console.log(bands);

                return (
                    bands
                )
            })
    }
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
            <div>
                <Button onClick={getBands}>Select Band</Button>
            </div>
            <Form onSubmit={props.handleSubmit(props.onSubmit)} size='large'>
                <Segment>

                    <Field
                        name="bandname"
                        component={renderInput}
                        label="Change band name"
                    />
                    <Field
                        name="bandlocation"
                        component={renderInput}
                        label="Change band location"
                    />
                    <Field
                        name="bandmembers"
                        component={renderInput}
                        label="Update band members"
                    />
                    <Field
                        name="bandemail"
                        component={renderInput}
                        label="Change band contact email"
                    />
                    <Field
                        name="description"
                        component={renderInput}
                        label="Edit band description"
                    />
                    {errorMessage ? <Label className="alertMssg" basic color='red'>{errorMessage}</Label> : ""}
                    <Field
                        name="bandgenre"
                        autoComplete="chrome-off"
                        component={multiInput}
                    />
                    <Button secondary fluid size='large'>
                        {props.buttonText}
                    </Button>
                </Segment>
            </Form>
            <br />
            <Link to="/editBand">
                <Button inverted color="red" animated secondary>
                    <Button.Content visible>Edit Your Bands</Button.Content>
                </Button>
            </Link>
            <br />
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
    form: "editbandform"
})(EditBandForm)