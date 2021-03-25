import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid"
export const GifExpertApp = () => {
  const [categories, setCategories] = useState([ //categories es un objeto y setcategories es una función para modificar el objeto
    "Cake",
    /* "Samurai X",
    "Dragon Ball", */
  ]); //usamos usestate para poder modificarlo luego
  //const categories =
 /*  const handleAdd = () => {
    setCategories([...categories, "Pokemon", "Queso"]); si metes queso saldrá junto con opokemon de una
  }; */
  const handleAdd=(category)=>{
      console.log('Soy gif añadiendo a lista...')
      setCategories([category,...categories ]);  //paréntesis pq como decía, setcategories es una fucnión
  }; ///por tanto el handleadd es q tuy le metes una category y el te la junta con las q tenías
  //A la barra de añadir le dice q tire de handleAdd de la q tirará el siguiente documento dándole valor a category de setInputvalue
  //El map trabaja como una función normal pero actúa con todos a la vez en lugar de de una en una
  /* const onDelete=(idx)=>{
    categories.splice(idx,1)
    setCategories([...categories])
  } */
  console.log("soy gif y me repinto")
  return (
    <>
      <h2>GifExpertApp</h2> 
      <AddCategory onAdd={handleAdd}/> 
      <hr /> {/* esto es lo que dibuja la línea debajo */}
      
      <ol>
        {" "}
        {/* order list */}{" "}
        {/*   <li> One </li> esto es para hacer lista y podrías hacer esto uno en uno y te saldría 1. one 2. etc con el nombre q tu les pongas */}{" "}
        {
          categories.map((category, posicion) => { //el map lo q hace es meterle la función q recibe a todos los elementos de una
            return <GifGrid
            key={posicion}
             /* onDelete={()=>onDelete(posicion)} */
             category={category} //aquí tenemos un título con un onAdd q le mete eso, la raya y luego meteremos una category y key, pèrp t,n el resto de esto q esta en gifGrid
            />

           /*  return <li key={posicion}>{category} </li>;  *///con el li aparece todo como x párrafos, así se pondrá por párrafos el category actualizado con lo último q hallamos puesto
          }) //es q el key tiene q tener siempre un valor propio, le ha puesto posicion por poner el nombre q sea pq lo q recibe de segundo término es como la posición en la q está
        }
      </ol>
    </>
  );
};
//DUDA: PQ EN EL CMD NO ME ESTÁ DEJANDO COMO ADMINISTRADOR HACER LO DE BUILD?