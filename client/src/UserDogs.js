import React, {useEffect, useState, useContext} from 'react';
import {UserContext} from './context/user';
import DogsList from './DogsList';
import {ErrorContext} from './context/error';

function UserDogs() {
    const {user} = useContext(UserContext);
    const [dogs, setDogs] = useState([]);
    const {setError} = useContext(ErrorContext);

   const fetchDogs = async () => {
    try {
        const resp = await fetch('/me');
        const data = await resp.json();
        setDogs(data.dogs);
    } catch (error) {
        setError(error)
    }
   }
    useEffect(() => {
        fetchDogs();
    }, [user])

    function updateDogs() {
        fetchDogs();
    }
    
    return (
        <div>
        <h1>My Dogs</h1>
        <DogsList dogs={dogs} updateDogs={updateDogs} />
        </div>
    )
};

export default UserDogs;