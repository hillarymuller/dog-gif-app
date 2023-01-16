import React, {useContext} from 'react';
import {UserContext} from './context/user';
import {ErrorContext} from './context/error';

function DogCard({ dog }) {
    const {adopted, name, image, id} = dog;
    const {user} = useContext(UserContext);
    const {setError} = useContext(ErrorContext);

    function handleClick() {
        fetch(`/dogs/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            adopted: !dog.adopted,
            user_id: user.id,
        }),
    })
    .then(r => {
        if (r.ok) {
            r.json()
            .then(data => console.log(data))

        } else {
            r.json()
            .then(err => setError(err.error))
        } 
    });
}
    return (
        <div className="card">
        <h1>{name}</h1>
        <img src={`${image}`} alt={`a cute photo of ${name}`}></img>
        <button className="button" onClick={handleClick}>{adopted ? "Give back to shelter?" : "Adopt Me!"}</button>
        </div>
    )
};

export default DogCard;