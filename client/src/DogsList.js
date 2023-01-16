import React from 'react';
import DogCard from './DogCard';

function DogsList({ dogs }) {
    const dogsList = dogs.map(dog => (<DogCard key={dog.id} dog={dog}/>))
    return (
        <div>
        <h1>Dogs List</h1>
        {dogsList}
        </div>
    )
};

export default DogsList;