import React, {useEffect, useState, useContext} from 'react';
import {ErrorContext} from './context/error';
import {UserContext} from './context/user';
import NewDogForm from './NewDogForm';
import DogsList from './DogsList';

function UserDogs() {
   
    const {setError} = useContext(ErrorContext);
    const {user, getCurrentUser} = useContext(UserContext);
    const [dogs, setDogs] = useState([]);
    const fetchDogs = async () => {
        try {
            const resp = await fetch(`/me`);
            const data = await resp.json();
            setDogs(data.dogs);
        } catch (error) {
            setError(error);
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
        <NewDogForm updateDogs={updateDogs} />
        </div>
    )
};

export default UserDogs;