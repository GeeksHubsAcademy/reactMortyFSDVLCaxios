
import React, {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './Profile.css';

const Profile = () => {

    let history = useHistory();

    //Hooks
    const [characters,setCharacters] = useState([]);

    //Equivalente a componentDidMount en componentes de Clase
    useEffect(()=> {

        getCharacters();
    }, []);

    //Equivalente a componentDidUpdate en componentes de Clase
    useEffect(()=> {
        
    });

    const clickHandler = (person) => {
        //Guardamos person en el localStorage
        localStorage.setItem('datosPersonaje', JSON.stringify(person));

        history.push('/detail');
    }

    const getCharacters = async () => {

        try{

            let res = await axios.get('https://rickandmortyapi.com/api/character');

            setCharacters(res.data.results);
        }catch (err){
            console.log({message: err.message});
        }
        
    }

    if(characters[0]?.id){
        return (<div>
            {characters.map((person, index) => (
                
                <div className="card" onClick={()=>clickHandler(person)} key={index}>
                    <p>{person.name}</p>
                    <img src={person.image} alt="movida" />
                </div>
                
            ))}
        </div>)
    } else {
        return (

            <div>Soy Profile</div>
        )
    }

    
}

export default Profile;