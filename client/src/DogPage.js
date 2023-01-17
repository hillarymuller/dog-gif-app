import React, { useEffect, useState, useContext } from 'react';
import {useParams} from 'react-router-dom';
import {ErrorContext} from './context/error';

function DogPage() {
    const {dogId} = useParams();
    const {setError} = useContext(ErrorContext);
    const [dog, setDog] = useState("");
    const [loading, setLoading] = useState(true);
    const {name, image, hunger, thirst, potty, energy, happiness, id} = dog;
    const [display, setDisplay] = useState(null);

    

   const fetchDog = async () => {
        try {
            const r = await fetch(`/dogs/${dogId}`)
            const data = await r.json();
                setDog(data)
                setLoading(false)
                } catch (err) {
                    setError(err.error)
            }
        }

    useEffect(() => {
        fetchDog();
    }, [dogId])

    function handleFeed(){
        
        fetch(`/dogs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                hunger: 0,
                energy: 10,
                potty: potty < 7 ? potty + 4 : 10,
                thirst: thirst < 9 ? thirst + 2 : 10,
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => {
                    updateDog(data)
                    setDisplay(data.eat_gif)
                })
            } else {
                r.json()
                .then(err => setError(err.error))
            }
        })

            
    
    }
    function handlePotty(){
        fetch(`/dogs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                potty: 0,
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => {
                    updateDog(data)
                    setDisplay(data.potty_gif)
                })
            } else {
                r.json()
                .then(err => setError(err.error))
            }
        })
    }
    function handleWalk(){
        fetch(`/dogs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                hunger: hunger < 9 ? hunger + 2 : 10,
                energy: energy > 3 ? energy - 4 : 0,
                potty: 0,
                happiness: happiness < 8 ? happiness + 3 : 10,
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => {
                    updateDog(data)
                    setDisplay(data.walk_gif)
                })
            } else {
                r.json()
                .then(err => setError(err.error))
            }
        })
    }
    function handleNap(){
        fetch(`/dogs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                energy: energy < 8 ? energy + 3 : 10,
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => {
                    updateDog(data)
                    setDisplay(data.nap_gif)
                })
            } else {
                r.json()
                .then(err => setError(err.error))
            }
        })
    }
    function handleTreat(){
        fetch(`/dogs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                happiness: happiness < 10 ? happiness + 1 : 10,
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => {
                    updateDog(data)
                    setDisplay(data.treat_gif)
                })
            } else {
                r.json()
                .then(err => setError(err.error))
            }
        })
    }
    function handlePet(){
        fetch(`/dogs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                happiness: happiness < 10 ? happiness + 1 : 10,
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => {
                    updateDog(data)
                    setDisplay(data.pet_gif)
                })
            } else {
                r.json()
                .then(err => setError(err.error))
            }
        })
    }
    function handleJog(){
        fetch(`/dogs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                happiness: happiness < 8 ? happiness + 3 : 10,
                energy: energy > 7 ? energy - 8 : 0,
                thirst: thirst < 9 ? thirst + 2 : 10,
                hunger: hunger < 7 ? hunger + 4 : 10,
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => {
                    updateDog(data)
                    setDisplay(data.jog_gif)
                })
            } else {
                r.json()
                .then(err => setError(err.error))
            }
        })
    }
    function handleWater(){
        fetch(`/dogs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                thirst: thirst > 1 ? thirst - 2 : 0,
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => {
                    updateDog(data)
                    setDisplay(data.drink_gif)
                })
            } else {
                r.json()
                .then(err => setError(err.error))
            }
        })
    }
    function handlePlay(){
        
        fetch(`/dogs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                happiness: happiness < 7 ? happiness + 4 : 10,
                energy: energy > 0 ? energy - 1 : 0,
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => {
                    updateDog(data)
                    setDisplay(data.play_gif)
                })     
            } else {
                r.json()
                .then(err => setError(err.error))
            }
        })
    }
    function updateDog(updatedDog) {
        setDog(updatedDog);
    }
    if (loading) return <h2>Loading Dog...</h2>
    return (
        <div className="card">
        <h1>{name}</h1>
        {display ? <img src={display} alt={name} className="float"></img> : <img src={image} alt={name} className="float"></img>}
        
        <h2>Hunger: {hunger}</h2>
        <h2>Thirst: {thirst}</h2>
        <h2>Energy: {energy}</h2>
        <h2>Potty: {potty}</h2>
        <h2>Happiness: {happiness}</h2>
        <button className="button" onClick={handleFeed}>Feed me</button>
        <button className="button" onClick={handlePotty}>Potty time</button>
        <button className="button" onClick={handleWalk}>Walk me</button>
        <button className="button" onClick={handleNap}>Nap time</button>
        <button className="button" onClick={handleTreat}>Treat me</button>
        <button className="button" onClick={handlePet}>Pet me</button>
        <button className="button" onClick={handleJog}>Jog together</button>
        <button className="button" onClick={handleWater}>Give me water</button>
        <button className="button" onClick={handlePlay}>Play with me</button>
        </div>
    )
}

export default DogPage;