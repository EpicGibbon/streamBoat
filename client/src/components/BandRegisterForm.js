import React, { useState, useEffect } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Message, Segment, Label } from 'semantic-ui-react';
import { Field, reduxForm } from "redux-form";
import { clearErrors } from "../actions/authActions";

const BandRegisterForm = (props) => {
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
                        name="bandname"
                        component={renderInput}
                        label="Enter your band's name"
                    />
                    <Field
                        bname="bandlocation"
                        component={renderInput}
                        label="Enter band's location"
                    />
                    <Field
                        name="bandmembers"
                        component={renderInput}
                        label="List band members and position/intrsument"
                    />
                    <Field
                        name="bandemail"
                        component={renderInput}
                        label="E-mail address to contact band"
                    />
                    {errorMessage ? <Label className="alertMssg" basic color='red'>{errorMessage}</Label> : ""}
                    <Field
                        name="bandgenre"
                        component={multiInput}
                        label="Pick genre(s) that most accurately define your band"
                    />
                    <Field
                        name="Band image"
                        component={imageInput}
                        label="Upload a profile image for your band"
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

const renderInput = ({ input, label }) => {

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
                <input {...input} autoComplete="off" placeholder={label} type={`${input.name !== "password" ? "text" : "password"}`} />
                <i aria-hidden="true" className={selectIcon()}></i>
            </div>
        </div>

    )
}

const multiInput = ({input}) => {
    let genres = [
        { name: "rock" },
        { name: "Hip-Hop" },
        { name: "Country" },
        { name: "EDM" },
        { name: "Blue Grass" },
//         "Blues","Classic Rock","Country","Dance","Disco","Funk","Grunge",
//  "Hip-Hop","Jazz","Metal","New Age","Oldies","Other","Pop","R&B",
//  "Rap","Reggae","Rock","Techno","Industrial","Alternative","Ska",
//  "Death Metal","Pranks","Soundtrack","Euro-Techno","Ambient",
//  "Trip-Hop","Vocal","Jazz+Funk","Fusion","Trance","Classical",
//  "Instrumental","Acid","House","Game","Sound Clip","Gospel",
//  "Noise","AlternRock","Bass","Soul","Punk","Space","Meditative",
//  "Instrumental Pop","Instrumental Rock","Ethnic","Gothic",
//  "Darkwave","Techno-Industrial","Electronic","Pop-Folk",
//  "Eurodance","Dream","Southern Rock","Comedy","Cult","Gangsta",
//  "Top 40","Christian Rap","Pop/Funk","Jungle","Native American",
//  "Cabaret","New Wave","Psychadelic","Rave","Showtunes","Trailer",
//  "Lo-Fi","Tribal","Acid Punk","Acid Jazz","Polka","Retro",
//  "Musical","Rock & Roll","Hard Rock","Folk","Folk-Rock",
//  "National Folk","Swing","Fast Fusion","Bebob","Latin","Revival",
//  "Celtic","Bluegrass","Avantgarde","Gothic Rock","Progressive Rock",
//  "Psychedelic Rock","Symphonic Rock","Slow Rock","Big Band",
//  "Chorus","Easy Listening","Acoustic","Humour","Speech","Chanson",
//  "Opera","Chamber Music","Sonata","Symphony","Booty Bass","Primus",
//  "Porn Groove","Satire","Slow Jam","Club","Tango","Samba",
//  "Folklore","Ballad","Power Ballad","Rhythmic Soul","Freestyle",
//  "Duet","Punk Rock","Drum Solo","Acapella","Euro-House","Dance Hall"
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

const imageInput = () => {
    
}