import React from 'react';
import DogCard from './DogCard';

function DogsList({ dogs, updateDogs }) {
    const dogsList = dogs.map(dog => (<DogCard key={dog.id} dog={dog} updateDogs={updateDogs} />))
    
    return (
        <div className="cards">
        <br></br>
        <br></br>
        {dogsList}
        </div>
    )
};

export default DogsList;