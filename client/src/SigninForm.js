import React, {useState, useContext} from 'react';
import {UserContext} from './context/user';
import {ErrorContext} from './context/error';
import {useHistory} from 'react-router-dom';


function SigninForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const {signin} = useContext(UserContext);
    const {setError} = useContext(ErrorContext);
    const history = useHistory();

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value,});
        setError(null);
    };
   const handleSubmit = async (e) => {
        e.preventDefault();
        signin(formData);
        setError("Successfully signed in")
        history.push('/dogs')
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
                name="password"
                value={formData.password}
                />
            </label>
            <button className="button" type="submit">Sign in!</button>
        </form>
    )
};

export default SigninForm;