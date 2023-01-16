import React from 'react';

function DogCard({ dog }) {
const {adopted, name, image} = dog;
    return (
        <div className="card">
        <h1>{name}</h1>
        <img src={`${image}`} alt={`a cute photo of ${name}`}></img>
        <button className="button">{adopted ? "Unavailable" : "Adopt Me!"}</button>
        </div>
    )
};

export default DogCard;