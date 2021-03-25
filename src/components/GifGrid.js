import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
 import { GifGridItem } from './GifGridItem' 
/* import getGifs from './helpers/getGifs' */


export const GifGrid = ({category}) => {
  const {loading, data:images} = useFetchGifs(category); //del useFetchGif solo va a devolver el loading
  console.log(loading);
/*  const [count, setcount] = useState(0)  */
 /*  const [images,setImages]=useState([])  */
    /* useEffect(()=>{
        console.log("Soy useEffect")
        getGifs(category) //está ejecutando todo el getGifs con mi categoria y lo coloca en la imagen?????
        .then(images=>setImages(images)); //está en relación con que ya no ponga setimages en el async q ahora no está abajo sino en getGifs pero no entiendo qué está haciendo
        
    }, [category])
     console.log("soy grid y me repinto con " + category) */

/*   const getGifs = async () => { //esto nos va a servir para coger la info de las imágenes y acabar poniéndolas en el return
      const url = 'https://api.giphy.com/v1/gifs/trending?q=+category&limit=10&api_key=UCjMjH4hDurwFrscWI4Hiq23epYRk07R' //el encode este es para que no te dé problema los espacios y tal
      //recuerda que has escrito tú el https y q has cogido esto de Postman!
      const respuesta = await fetch(url);
      const {data} = await respuesta.json(); 
      const gifs = data.map(imagenes => {
          return{
              id: imagenes.id,
              title: imagenes.title, 
              url: imagenes.images?.downsized_medium.url

          }
      })
      return gifs;
      //setImages(gifs)//el images no es nada pq al principio no aparecerá nada y luego setImages le metes el gifs
      //console.log(gifs); //: ahí arriba ha utilizado desestructuración para sacar de data lo q es la data en sí. no sé si acabo de entenderlo
    }  */
     
   
        return(
          <> 
           <h3 className= 'animate__animated animate__fadeIn'>{category}</h3>
           {/* {loading?'cargando...':'fin de la carga'}  */} {/* si está cargando (?) pones eso, sino (:) lo otro  */}
             <div className='card-grid'>
        {/* <h3>{count}</h3>  */}
               
                     {
                    images.map(imagenes=>(
                      <GifGridItem 
                      key={imagenes.id}
                      imagenes = {imagenes}/> //esto te está mandando imagenes entero, ponemos {imagenes} para saber de dónde lo saca el grid
                    ))
                    }  
                {/* <button onClick={()=>setcount(count+1)}> </button>  */} 
                         {/* <button onClick={()=>onDelete()}>Borrar</button> */}
            </div>   
             </>
        )
}
