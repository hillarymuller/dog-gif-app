import React, {useState, useContext, useEffect} from 'react';
import {UserContext} from './context/user';
import {ErrorContext} from './context/error';
import {useHistory} from 'react-router-dom';

function DogForm({ editMode, dog }) {
    const {user, getCurrentUser} = useContext(UserContext);
    const {setError} = useContext(ErrorContext);
    const history = useHistory();
 
    useEffect(() => {
        if (!user) {
             getCurrentUser()}
           
    }, [user])
  
    const [formData, setFormData] = useState(editMode ? {
        name: dog.name,
        eatGif: dog.eat_gif,
        drinkGif: dog.drink_gif,
        image: dog.image,
        treatGif: dog.treat_gif,
        petGif: dog.pet_gif,
        napGif: dog.nap_gif,
        playGif: dog.play_gif,
        pottyGif: dog.potty_gif,
        walkGif: dog.walk_gif,
        jogGif: dog.jog_gif
    } : {
        name: "",
        eatGif: "",
        drinkGif: "",
        image: "",
        treatGif: "",
        petGif: "",
        napGif: "",
        playGif: "", 
        pottyGif: "",
        walkGif: "",
        jogGif: ""
    }) 
    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value,});
    }
    function handleAdd(e) {
        e.preventDefault();
        fetch('/dogs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "image": formData.image,
                "name": formData.name,
                "eat_gif": formData.eatGif,
                "drink_gif": formData.drinkGif,
                "treat_gif": formData.treatGif,
                "pet_gif": formData.petGif,
                "nap_gif": formData.napGif,
                "play_gif": formData.playGif, 
                "potty_gif": formData.pottyGif,
                "walk_gif": formData.walkGif,
                "jog_gif": formData.jogGif, 
                "user_id": null, 
                "adopted": false,
                "hunger": 10,
                "thirst": 10,
                "energy": 10,
                "happiness": 0,
                "potty": 10,
            })
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => {
                    console.log(data)
                    setError("Dog successfully created!")
                    redirect()
                })
            } else {
                r.json()
                .then(err => setError(err.error))
            }
        })
    }
    function redirect() {
        history.push('/dogs')
    }
    function handleEdit(e) {
        e.preventDefault();
        fetch(`/dogs/${dog.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "image": formData.image,
                "name": formData.name,
                "eat_gif": formData.eatGif,
                "drink_gif": formData.drinkGif,
                "treat_gif": formData.treatGif,
                "pet_gif": formData.petGif,
                "nap_gif": formData.napGif,
                "play_gif": formData.playGif, 
                "potty_gif": formData.pottyGif,
                "walk_gif": formData.walkGif,
                "jog_gif": formData.jogGif
            })
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => {
                    console.log(data)
                    setError("Dog successfully updated!")
                    redirect()
                })
            } else {
                r.json()
                .then(err => setError(err.error))
            }
        })
    }
    return (
        <div>
            <h2>{editMode ? `Edit ${dog.name}` : "Add a Dog"}</h2>
            <form onSubmit={editMode ? handleEdit : handleAdd}>
                <label>
                    Name: 
                    <input onChange={handleChange}
                    type="text"
                    name="name"
                    value={formData.name}
                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Image: 
                    <input onChange={handleChange}
                    type="text"
                    name="image"
                    value={formData.image}
                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Walking gif: 
                    <input onChange={handleChange}
                    type="text"
                    name="walkGif"
                    value={formData.walkGif}
                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Jogging gif: 
                    <input onChange={handleChange}
                    type="text"
                    name="jogGif"
                    value={formData.jogGif}
                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Potty gif: 
                    <input onChange={handleChange}
                    type="text"
                    name="pottyGif"
                    value={formData.pottyGif}
                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Eating gif: 
                    <input onChange={handleChange}
                    type="text"
                    name="eatGif"
                    value={formData.eatGif}
                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Drinking gif: 
                    <input onChange={handleChange}
                    type="text"
                    name="drinkGif"
                    value={formData.drinkGif}
                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Treat gif: 
                    <input onChange={handleChange}
                    type="text"
                    name="treatGif"
                    value={formData.treatGif}
                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Petting gif: 
                    <input onChange={handleChange}
                    type="text"
                    name="petGif"
                    value={formData.petGif}
                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Napping gif: 
                    <input onChange={handleChange}
                    type="text"
                    name="napGif"
                    value={formData.napGif}
                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Playing gif: 
                    <input onChange={handleChange}
                    type="text"
                    name="playGif"
                    value={formData.playGif}
                    />
                </label>
                <br></br>
                <br></br>
                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default DogForm;