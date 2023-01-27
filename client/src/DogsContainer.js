import React, {useState, useEffect} from 'react';
import DogsList from './DogsList';


function DogsContainer({ dogs, fetchDogs}) {


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