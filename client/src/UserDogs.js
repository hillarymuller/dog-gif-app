import React, {useEffect, useState, useContext} from 'react';
import {UserContext} from './context/user';
import DogsList from './DogsList';

function UserDogs({ fetchDogs }) {
    const {user, getCurrentUser} = useContext(UserContext);
    const [userDogs, setUserDogs] = useState([]);

   
    useEffect(() => {
        if (!user) {
            getCurrentUser();
        } else {
            setUserDogs(user.dogs)
        }
    }, [user])

    function updateDogs() {
        fetchDogs();
    }
    
    return (
        <div>
        <h1>My Dogs</h1>
        <DogsList dogs={userDogs} updateDogs={updateDogs} />
        </div>
    )
};

export default UserDogs;