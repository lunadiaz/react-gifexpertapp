const getGifs = async (category) => { //esto nos va a servir para coger la info de las imágenes y acabar poniéndolas en el return
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=UCjMjH4hDurwFrscWI4Hiq23epYRk07R`//el encode este es para que no te dé problema los espacios y tal
    //recuerda que has escrito tú el https y q has cogido esto de Postman!
    const respuesta = await fetch(url); //fetch pq es url, es una petición a un servidor web
    const {data} = await respuesta.json(); //de todo lo q devolveria q devuelva solo el data
    const gifs = data.map(imagenes => {
        return{
            id: imagenes.id,
            title: imagenes.title, 
            url: imagenes.images?.downsized_medium.url

        }
    })
    return gifs//el images no es nada pq al principio no aparecerá nada y luego setImages le metes el gifs
    //console.log(gifs); 
    
  }
export default getGifs