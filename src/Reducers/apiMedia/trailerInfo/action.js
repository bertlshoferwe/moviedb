export const actionTypes = {
    MOVIETRAILER           : 'movietrailer',
    TVTRAILER              : 'tvtrailer',
    ERROR                  : 'error',
    TRAILERLOADING         : 'trailerloading'
     }
   
   export const MovieTrailer = (id) => {  
       const details = 'https://api.themoviedb.org/3/movie/'+ id +'?api_key=04ac5e20700da696a4b482b8e3d1c26e&language=en-US&append_to_response=videos,credits,similar,reviews,'
       return (dispatch) => {
           
           fetch(details)
           .then((response) => response.json())
           .then(response => dispatch({
                                   type: actionTypes.MOVIETRAILER,
                                   payload: response
                               }))
           .catch( (error) => { dispatch({ type:actionTypes.ERROR }) })
   
       };
   };
   
   export const TvTrailer = (id) => {  
       const details = 'https://api.themoviedb.org/3/tv/'+ id +'?api_key=04ac5e20700da696a4b482b8e3d1c26e&language=en-US&append_to_response=content_ratings,credits,images,screened_theatrically,similar,videos'
   
       return (dispatch) => {
           
           fetch(details)
           .then((response) => response.json())
           .then(response => dispatch({
                                   type: actionTypes.TVTRAILER,
                                   payload: response
                               }))
           .catch( (error) => { dispatch({ type:actionTypes.ERROR }) })
   
       };
   };
      