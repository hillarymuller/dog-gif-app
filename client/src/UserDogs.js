import React, {useEffect, useState} from 'react';

import DogsList from './DogsList';

function UserDogs() {
    const [dogs, setDogs] = useState([]);
    

    const fetchDogs = async () => {
        try {
            const resp = await fetch(`/me`);
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
        <h1>My Dogs</h1>
        <DogsList dogs={dogs} updateDogs={updateDogs} />
        </div>
    )
};

export default UserDogs;