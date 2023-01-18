import React, { useState, useContext, useEffect } from 'react';
import {ErrorContext} from './context/error';
import {UserContext} from './context/user';
import NewHouseholdForm from './NewHouseholdForm';



function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        householdId: 0
    })
    const {setError} = useContext(ErrorContext);
    const {signup} = useContext(UserContext);
    const [households, setHouseholds] = useState([]);
  
    const fetchHouseholds = async () => {
        try {
            const resp = await fetch('/households');
            const data = await resp.json();
            setHouseholds(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchHouseholds();
    }, []);

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value,});
        setError(null);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        signup({...formData, password_confirmation: formData.passwordConfirmation, household_id: formData.householdId})
    }
    
    function addNewHousehold(newHousehold) {
        console.log(newHousehold);
        fetchHouseholds();
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
                    className="password"
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
                    className="password"
                    value={formData.passwordConfirmation}
                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Household:
                    <select value={formData.householdId}
                    onChange={handleChange}
                    name="householdId">
                        <option>Please choose a household</option>
                        {households.map(household => <option value={household.id} key={household.id}>{household.name}</option>)}
                    </select>
                    <br></br>
                    <br></br>
                </label>
                <button className="button" type="submit">Sign Up!</button>
            </form>
            <h3>No household yet?</h3>
            <NewHouseholdForm addNewHousehold={addNewHousehold} />
        </div>
    )
};

export default SignupForm;