import React from "react";
import '../css/style.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate   } from 'react-router-dom'; 

const SignupComponent = () => {

    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [confirmPassword , setConfirmPassword] = useState("")
    const [username , setUsername] = useState("")
    const navigate = useNavigate();

    const usernameEvent = (e)=>{
        setUsername(e.target.value)
    }

    const passwordEvent = (e)=>{
        setPassword(e.target.value)
    }

    const confirmPasswordEvent = (e)=>{
        setConfirmPassword(e.target.value)
    }

    const firstNameEvent = (e)=>{
        setFirstName(e.target.value)
    }

    const lastNameEvent= (e)=>{
        setLastName(e.target.value)
    }

    const emailEvent= (e)=>{
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            username : username,
            password : password,
            firstName : firstName,
            lastName : lastName,
            email : email,
            confirmPassword : confirmPassword

        }
        const response = axios.post('http://localhost:8000/api/users', newUser)
        .then( response => {
            console.log(response.data);
            navigate("/home");
        })
        .catch( error => {
            console.error('Error fetching data:', error)
        })

    }

    return (
        <>
            <div className="container-fluid bg-ligth container-div">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-8 col-sm-10">
                        <form className="form-container" onSubmit={handleSubmit}>
                            <h4 class="text-center font-weight-bold"> Sign Up </h4>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Username" onChange={usernameEvent } value={username}/>
                                <label htmlFor="floatingInput">Username</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={passwordEvent }  value={password} />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Confirm Password" onChange={confirmPasswordEvent }  value={confirmPassword}/>
                                <label htmlFor="floatingPassword">Confirm Password</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingFirstname" placeholder="Firstname"  onChange={firstNameEvent } value={firstName}/>
                                <label htmlFor="floatingFirstname">Firstname</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingLastname" placeholder="Lastname" onChange={lastNameEvent }  value={lastName}/>
                                <label htmlFor="floatingLastname">Lastname</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingEmail" placeholder="Email"  onChange={emailEvent } value={email}/>
                                <label htmlFor="floatingEmail">Email</label>
                            </div>
                            <p class="text-break"></p>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Sign Up</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </>

    )

}

export default SignupComponent;