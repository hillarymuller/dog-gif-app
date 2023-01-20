import React, {useEffect, useState, useContext} from 'react';
import DogForm from './DogForm';
import {useParams} from 'react-router-dom';
import {ErrorContext} from './context/error';


function EditDog() {
    const {dogId} = useParams();
    const [dog, setDog] = useState(null);
    const {setError} = useContext(ErrorContext);
    const [editMode, setEditMode] = useState(true);
    

    const fetchDog = async () => {
        try {
            const resp = await fetch(`/dogs/${dogId}`);
            const data = await resp.json();
            setDog(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        if (!dog) {
            fetchDog()
        }
    }, [dog])

    return (
        <div>
            {dog ? <DogForm editMode={editMode} dog={dog} fetchDog={fetchDog} /> : null}
        </div>
    )
}
export default EditDog;