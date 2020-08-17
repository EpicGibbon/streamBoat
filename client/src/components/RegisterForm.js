
import React, { useState, useEffect } from 'react';
// import Multiselect from  'react-bootstrap-multiselect';
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
{/*                     
                     <Field
                        name="genres"
                        component={multiInput}
                        label="genres"
                    /> */}
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

// const multiInput = ({input, label}) => {
//     let genres = []
     
//     return (

//         <div className="row">
//         <div className="col-md-12">
      
//           <select className="mdb-select colorful-select dropdown-primary md-form" multiple searchable="Search here..">
//             <option value="" disabled selected>Choose your country</option>
//             <option value="1">USA</option>
//             <option value="2">Germany</option>
//             <option value="3">France</option>
//             <option value="4">Poland</option>
//             <option value="5">Japan</option>
//           </select>
//           <label className="mdb-main-label">Label example</label>
//           <button className="btn-save btn btn-primary btn-sm">Save</button>
      
//         </div>
//       </div>
//     )
// }



export default reduxForm({
    form: "registerform"
})(RegisterForm)