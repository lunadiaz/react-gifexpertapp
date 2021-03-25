import React from 'react';
export const GifGridItem = ({imagenes}) => {
    return (
        <div className='card animate__animated animate__bounce'> 
            <img src={imagenes.url} alt={imagenes.title}/> 
            <p>{imagenes.title}</p>
        </div>
    )
}
// alt es para poner un textyo cuando no acrgue la imagen y eso
//lo de animate_animated es una de las q hemos copiado de esa web y lo ponemos al lado de className cause why not
