import React, {useEffect, useState} from 'react';
import DogsList from './DogsList';


function DogsContainer() {
    const [dogs, setDogs] = useState([]);
    

    const fetchDogs = async () => {
        try {
            const resp = await fetch('/dogs');
            const data = await resp.json();
            setDogs(data);
        } catch (error) {
            console.log(error);
        }
    }
  
  
useEffect(() => {
    fetchDogs();
}, [])

    function updateDogs() {
        fetchDogs();
    }
    return (
        <div>
            <h1 className="title">All Dogs</h1>
            <DogsList dogs={dogs} updateDogs={updateDogs} />
        </div>
    )
};

export default DogsContainer;