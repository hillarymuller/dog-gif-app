import React, { useState, useContext } from 'react';
import {ErrorContext} from './context/error';
import {UserContext} from './context/user';


function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        passwordConfirmation: ""
    })
    const {error, setError} = useContext(ErrorContext);
    const {setUser} = useContext(UserContext);
  

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value,});
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({...formData, "password_confirmation": formData.passwordConfirmation})
        })
        .then(resp => {
            if (resp.ok) {
                resp.json()
                .then(data => setUser(data))
            } else {
                resp.json()
                .then(err => setError(err.error))
            }
        });
    }
 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {error ? (<h2 className="error">{error}</h2>) : null}
                <label>
                    Name:
                    <input onChange={handleChange}
                    type="text"
                    name="name"
                    value={formData.name}
                    />
                </label>
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
                <label>
                    Email Address:
                    <input onChange={handleChange}
                    type="text"
                    name="email"
                    value={formData.email}
                    />
                </label>
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
                <label>
                    Confirm Password:
                    <input onChange={handleChange}
                    type="text"
                    name="passwordConfirmation"
                    value={formData.passwordConfirmation}
                    />
                </label>
                <br></br>
                <button type="submit">Sign Up!</button>
            </form>
        </div>
    )
};

export default SignupForm;