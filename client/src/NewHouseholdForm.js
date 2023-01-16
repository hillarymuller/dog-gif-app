import React, {useState, useContext} from 'react';
import {ErrorContext} from './context/error';

function NewHouseholdForm({ addNewHousehold }) {
    const [name, setName] = useState("");
    const {setError} = useContext(ErrorContext);
    
    function handleChange(e) {
        setName(e.target.value);
        setError([]);
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/households', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "name": name            
            })
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => addNewHousehold(data))
            } else {
                r.json()
                .then(err => setError(err.error))
            }
        })
        setName("");
    }
    return (
        <div>
            <h2>Create New Household</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Household Name:
                    <input onChange={handleChange}
                    type="text"
                    name="name"
                    value={name}
                    />
                </label>
                <button className="button" type="submit">Add!</button>
            </form>
        </div>
    )
}

export default NewHouseholdForm;