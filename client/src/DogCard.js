import React, {useContext, useState} from 'react';
import {UserContext} from './context/user';
import {ErrorContext} from './context/error';
import { Link } from 'react-router-dom';


function DogCard({ dog, updateDogs }) {
    const [currentDog, setCurrentDog] = useState(dog);
    const {adopted, name, image, id, user_id: userId} = currentDog;
    const {user} = useContext(UserContext);
    const {setError} = useContext(ErrorContext);
    

    function handleClick() {
        if (adopted === false) {
        fetch(`/dogs/${id}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            adopted: !adopted,
            user_id: user.id,
        }),
    })
    .then(r => {
        if (r.ok) {
            r.json()
            .then(data => {
                console.log(data)
                setCurrentDog(data)
                updateDogs()
            })

        } else {
            r.json()
            .then(err => setError(err.error))
        } 
    });
} else {
    fetch(`/dogs/${id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        adopted: !adopted,
        user_id: null,
    }),
})
.then(r => {
    if (r.ok) {
        r.json()
        .then(data => {
            console.log(data);
            setCurrentDog(data);
            updateDogs()
        })

    } else {
        r.json()
        .then(err => setError(err.error))
    } 
});
}
    }
    return (
        <div className="card">
        <h1>{name}</h1>
        <img src={`${image}`} alt={`a cute photo of ${name}`}></img>
        <button className="button" onClick={handleClick}>{adopted ? "Give back to shelter?" : "Adopt Me!"}</button>
        {(userId === user.id) ? (<Link className="App-link" to={`/dogs/${currentDog.id}`}>Take Care of Me!</Link>) : null}
        </div>
    )
};

export default DogCard;