
import React, {useState} from 'react'
import propTypes from 'prop-types'
export const AddCategory = ({onAdd}) => { //permite al onAdd entrar en la función
    const [inputValue, setInputValue] = useState("Escribe aquí")//escribe aquí es el inputValue
    const handleInputChange = (e)=> {
        console.log("soy add y han pulsado letra");
        setInputValue ( e.target.value ); //el valor en el que se convertirá ahora el inputValue gracias al set es este
    }
    /* const handleSubmit = (e)=>{
        e.preventDefault(); //esto es para prevenir que se recargue
        onAdd(inputValue);

    } */

    const handleSubmit=(e)=>{ 
        /* onAdd(inputValue); */
       e.preventDefault()
        console.log("soy add y han pulsado intro")
        if (inputValue.trim().length>0){ //o sea si tiene más de 2 letras q añada, sino no
            console.log("soy add y notifico para añadir")
            onAdd(inputValue); //aquí estás asignando el valor q tiene ahora el inputValue al onAdd
            setInputValue('') //esto para que después de este de como nuevo valor nada.
        } // esto debería estar así pero como no funcionaba lo he quitado
    }
    console.log("Soy Add y me repinto...")
    return( //si el input es la barra esa pero esto sirve para q aparezca abajo...?? o sea q es lo q hace realmente q aparezca abajo.
        <form onSubmit= {handleSubmit}> {/* cuando pulses vas a poner el handlesubmit tipo texto y tal como dice abajo */}
            <input 
            type="text"
            value={inputValue} //esto es para que se ponga lo de escribe aquí ahí. 
            onChange={ handleInputChange}
            /> 
            {/* <button onClick={handleSubmit}> Agregar</button> */}
        </form>
    )
    //el input es el texto q metemos dentro del AddCategory (q es la barra esa, estyá dentro de ella pq toda esta función est´ña dentro de ella)
}
AddCategory.propTypes={ //esto e spara q todo el mundo lo haga
    onAdd: propTypes.func.isRequired
}