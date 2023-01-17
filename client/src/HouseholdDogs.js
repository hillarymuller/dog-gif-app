import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from './context/user';
import DogsList from './DogsList';
import {ErrorContext} from './context/error';

function HouseholdDogs() {
   
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const {setError} = useContext(ErrorContext);
    const {user} = useContext(UserContext);
    useEffect(() => {
        fetch(`/households/${user.household.id}`)
        .then(r => {
            if (r.ok) {
                r.json()
            .then(data => setDogs(data.dogs))
            setLoading(false);
        } else {
            r.json()
            .then(err => setError(err.error))
        }
        })
    }, []);

    function updateDogs(editedDog) {
        setDogs(dogs.filter(dog => {
            return dog.id !== editedDog.id
        }))
    }
    
    return (
        <div>
        <h1>Household Dogs</h1>
        {loading ? "Dogs Loading..." : null}
        <DogsList dogs={dogs} updateDogs={updateDogs} />
        </div>
    )
};

export default HouseholdDogs;