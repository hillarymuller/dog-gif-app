import React, {useEffect, useState} from 'react';
import DogForm from './DogForm';
import {useParams} from 'react-router-dom';



function EditDog() {
    const {dogId} = useParams();
    const [dog, setDog] = useState(null);
   
    

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
            {dog ? <DogForm editMode={true} dog={dog} fetchDog={fetchDog} /> : null}
        </div>
    )
}
export default EditDog;