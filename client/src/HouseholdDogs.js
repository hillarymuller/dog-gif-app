import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from './context/user';
import DogsList from './DogsList';
import {ErrorContext} from './context/error';


function HouseholdDogs() {
   
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const {setError} = useContext(ErrorContext);
    const {user, getCurrentUser} = useContext(UserContext);
    const [householdName, setHouseholdName] = useState(null);
  
    function fetchDogs() {
        (user ? (
        fetch(`/households/${user.household.id}`)
        .then(r => {
            if (r.ok) {
                r.json()
            .then(data => setDogs(data.dogs))
            setLoading(false);
            setHouseholdName(user.household.name)
        } else {
            r.json()
            .then(err => setError(err.error))
        }
        })
        ) : getCurrentUser())
    }

    useEffect(() => {
        fetchDogs();
       
    }, [user]);

    function updateDogs() {
        fetchDogs();
    }
    function handleChange(e){
        setHouseholdName(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/households/${user.household.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: householdName
            })
        }) .then(r => {
            if (r.ok) {
                r.json()
                .then(data => {
                    console.log(data)
                    setHouseholdName(data.name)
                    getCurrentUser();
                })
            } else {
                r.json()
                .then(err => setError(err.error))
            }
        })
    }

    return (
        <div>
        <h1>{user ? `${user.household.name}` : "Household"} Dogs</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Edit Household Name:
                <input onChange={handleChange}
                type="text"
                name="name"
                value={householdName}
                />
            </label>
            <button className="button" type="submit">Submit</button>
            </form>
        {loading ? "Dogs Loading..." : null}
        <DogsList dogs={dogs} updateDogs={updateDogs} />
        </div>
    )
};

export default HouseholdDogs;