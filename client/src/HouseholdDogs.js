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
    
    return (
        <div>
        <h1>Household Dogs</h1>
        <DogsList dogs={dogs} />
        </div>
    )
};

export default HouseholdDogs;