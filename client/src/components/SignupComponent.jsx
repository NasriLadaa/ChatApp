import React from "react";
import '../css/style.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupComponent = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [username, setUsername] = useState("")
    const [apiErrors, setApiErrors] = useState([]);


    const navigate = useNavigate();

    const usernameEvent = (e) => {
        setUsername(e.target.value)
    }

    const passwordEvent = (e) => {
        setPassword(e.target.value)
    }

    const confirmPasswordEvent = (e) => {
        setConfirmPassword(e.target.value)
    }

    const firstNameEvent = (e) => {
        setFirstName(e.target.value)
    }

    const lastNameEvent = (e) => {
        setLastName(e.target.value)
    }

    const emailEvent = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email,
            confirmPassword: confirmPassword

        }

        axios.post('http://localhost:8000/api/users', newUser)
            .then(response => {
                console.log(response.data.message);  
                navigate("/home");
            })
            .catch(error => {
              const errors =error.response.data.errors;
               fillApiErrors(errors)
            });

    }

    const fillApiErrors = (errors) => {
        const errorMessages = [];
        // Loop through the `errors` object to access individual error details
        for (const field in errors) {
            if (errors.hasOwnProperty(field)) {
                const error = errors[field]; // Access the error for the specific field
                if (error && error.message) {
                    errorMessages.push(error.message);
                }
            }
        }
    
        setApiErrors(errorMessages);
    };

    return (
        <>
            <div className="container-fluid bg-ligth container-div">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-7 col-sm-10">
                        <form className="form-container" onSubmit={handleSubmit} >
                            <h4 className="text-center font-weight-bold"> Sign Up </h4>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Username" onChange={usernameEvent} value={username} />
                                <label htmlFor="floatingInput">Username</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={passwordEvent} value={password} />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingComfirmPassword" placeholder="Confirm Password" onChange={confirmPasswordEvent} value={confirmPassword} />
                                <label htmlFor="floatingPassword">Confirm Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingFirstname" placeholder="Firstname" onChange={firstNameEvent} value={firstName} />
                                <label htmlFor="floatingFirstname">Firstname</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingLastname" placeholder="Lastname" onChange={lastNameEvent} value={lastName} />
                                <label htmlFor="floatingLastname">Lastname</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingEmail" placeholder="Email" onChange={emailEvent} value={email} />
                                <label htmlFor="floatingEmail">Email</label>
                            </div>
                            <p className="text-break"></p>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Sign Up</button>
                            </div>
                        </form>
                  

                    </div>

                    <div className="m-3 col-lg-4 col-md-3 col-sm-12">

                    {apiErrors.length > 0 && (
                            <div className="alert alert-danger">
                                <ul className="text-start">
                                    {apiErrors.map((err, index) => (
                                        <li key={index}>{err}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>

    )

}

export default SignupComponent;