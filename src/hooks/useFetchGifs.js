//el use es para saber q es un hook (es un tipo de función) pq hay un acuerdo de comenzar llamándoles a todos hook
import { useState, useEffect } from 'react';
import getGifs from '../components/helpers/getGifs';
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect( () => { //así solo se dispara cuando cmabia la categoría
    getGifs(category)
    .then(img=>{
    
      setState({
      data: img, //DUDA: no entiendo muy bien eso de meter el img aquí
      loading:false
        });
     
      
    })

  }, [category])

  return state;
};
