import React, { useState, useContext } from 'react';

import {UserContext} from './context/user';


function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        passwordConfirmation: ""
    })
    
    const {signup} = useContext(UserContext);
  

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value,});
        console.log(formData);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        signup({...formData, password_confirmation: formData.passwordConfirmation})
    }
 
    return (
        <div>
            <h2>Make an Account</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input onChange={handleChange}
                    type="text"
                    name="name"
                    value={formData.name}
                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Username:
                    <input onChange={handleChange}
                    type="text"
                    name="username"
                    value={formData.username}
                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Email Address:
                    <input onChange={handleChange}
                    type="text"
                    name="email"
                    value={formData.email}
                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Password:
                    <input onChange={handleChange}
                    type="text"
                    name="password"
                    value={formData.password}
                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Confirm Password:
                    <input onChange={handleChange}
                    type="text"
                    name="passwordConfirmation"
                    value={formData.passwordConfirmation}
                    />
                </label>
                <br></br>
                <br></br>
                <button type="submit">Sign Up!</button>
            </form>
        </div>
    )
};

export default SignupForm;