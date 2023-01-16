import React, {useState, useContext} from 'react';
import {UserContext} from './context/user';
import {ErrorContext} from './context/error';


function SigninForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const {signin} = useContext(UserContext);
    const {setError} = useContext(ErrorContext);

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value,});
        setError(null);
    };
    function handleSubmit(e) {
        e.preventDefault();
        signin(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input onChange={handleChange}
                type="text"
                name="username"
                value={formData.username}
                />
            </label>
            <label>
                Password:
                <input onChange={handleChange}
                type="text"
                name="username"
                value={formData.password}
                />
            </label>
            <button className="button" type="submit">Sign in!</button>
        </form>
    )
};

export default SigninForm;