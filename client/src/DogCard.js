import React, {useContext, useState, useEffect} from 'react';
import {UserContext} from './context/user';
import {ErrorContext} from './context/error';
import { Link } from 'react-router-dom';


function DogCard({ dog, updateDogs }) {
    const [currentDog, setCurrentDog] = useState(dog);
    const {adopted, name, image, id, user_id: userId } = currentDog;
    const {user, getCurrentUser} = useContext(UserContext);
    const {setError} = useContext(ErrorContext);
    
    useEffect(() => {
        if (!user) {
            getCurrentUser();
        }
    }, [user])
    

    function handleClick(e) {
        e.preventDefault();
        if (adopted === false) {
        fetch(`/dogs/${id}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            adopted: !adopted,
            user_id: user.id
        }),
    })
    .then(r => {
        if (r.ok) {
            r.json()
            .then(data => {
                console.log(data)
                setCurrentDog(data)
                updateDogs()
                setError(`Successfully adopted ${data.name}`)
            })

        } else {
            r.json()
            .then(err => setError(err.error))
        } 
    });
} else {
    alert(`${currentDog.name} has already been adopted!`)
};
}
    
    function handleDelete(id) {
        fetch(`/dogs/${id}`, {
            method: "DELETE"
        })
        .then(r => {
            if (r.ok) {
                updateDogs()
            } else {
                r.json()
                .then(err => setError(err.error))
            }
        })
    }
    return (
        <div className="card">
        <h1>{name}</h1>
        <img src={`${image}`} alt={`a cute photo of ${name}`}></img>
        {user && (adopted === false) ? <button className="button" onClick={handleClick}>{(`Adopt ${name}!`)}</button> : null}
        {(user && user.household.users.filter(user => user.id === currentDog.userId)) ? (<Link className="App-link" to={`/dogs/${currentDog.id}`}>Take Care of Me!</Link>) : null}
        {(user && user.username.toLowerCase() === "hillarymuller") ? (
        <div>
            <button className="button" onClick={() => handleDelete(id)}>Delete Dog</button> 
            <Link className="App-link" to={`/dogs/${id}/edit`}>Edit Dog</Link>
            </div>) : null}
        </div>
    )
};

export default DogCard;