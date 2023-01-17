import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from './context/user';
import DogsList from './DogsList';

function HouseholdDogs() {
    const {user} = useContext(UserContext);
    const [dogs, setDogs] = useState([]);

    const fetchDogs = async () => {
        try {
            const resp = await fetch(`/households/${user.household.id}`);
            const data = await resp.json();
            setDogs(data.dogs);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchDogs();
        console.log(dogs);
    }, []);

    function updateDogs(editedDog) {
        setDogs(dogs.filter(dog => {
            return dog.id !== editedDog.id
        }))
    }
    
    return (
        <div>
        <h1>Household Dogs</h1>
        <DogsList dogs={dogs} updateDogs={updateDogs} />
        </div>
    )
};

export default HouseholdDogs;