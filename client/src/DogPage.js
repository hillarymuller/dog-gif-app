import React, { useEffect, useState, useContext } from 'react';
import {useParams} from 'react-router-dom';
import {ErrorContext} from './context/error';

function DogPage() {
    const {dogId} = useParams();
    const {setError} = useContext(ErrorContext);
    const [dog, setDog] = useState("");
    const [loading, setLoading] = useState(true);
    const {name, image, hunger, thirst, potty, energy, happiness} = dog;
    const [dogTraits, setDogTraits] = useState({
        hunger: hunger,
        thirst: thirst,
        happiness: happiness,
        energy: energy,
        potty: potty
    })

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

    if (loading) return <h2>Loading Dog...</h2>
    return (
        <div className="card">
        <h1>{name}</h1>
        <img src={image} alt={name} className="float"></img>
        <h2>Hunger: {hunger}</h2>
        <h2>Thirst: {thirst}</h2>
        <h2>Energy: {energy}</h2>
        <h2>Potty: {potty}</h2>
        <h2>Happiness: {happiness}</h2>
        <button className="button">Feed me</button>
        <button className="button">Potty time</button>
        <button className="button">Walk me</button>
        <button className="button">Nap time</button>
        <button className="button">Treat me</button>
        <button className="button">Pet me</button>
        <button className="button">Jog together</button>
        <button className="button">Give me water</button>
        <button className="button">Play with me</button>
        </div>
    )
}

export default DogPage;