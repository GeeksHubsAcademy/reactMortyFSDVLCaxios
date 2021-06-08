
import React, {useEffect,useState} from 'react';

import './Detail.css';


const Detail = () => {


    const [detalle,setDetalle] = useState([]);

    //Este useEffect se ejecuta una vez se haya montado el componente
    useEffect(()=> {
        obtenDatos();
    },[]);


    useEffect(()=> {
        
    });

    const obtenDatos = () => {
        setDetalle(JSON.parse(localStorage.getItem('datosPersonaje')));
    }

    if(detalle?.name){

        return(
            <div className="tarjeta">
                <p>{detalle.name}</p>
                <p>{detalle.species}</p>
                <p>{detalle.status}</p>
                <p>{detalle.gender}</p>
                <img src={detalle.image} alt="fotito"/>
            </div>
        )

    }else {
        return (
            <div>
                ESTOY CARGANDO!
            </div>
        )
    }

    
}

export default Detail;