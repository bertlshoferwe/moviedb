export const actionTypes = {
    ERROR                  : 'error',
    OPEN_TRAILER           : 'open_trailer',
    CLOSE_TRAILER          : 'close_trailer',
     }
   
   export const MovieTrailer = (id) => {  
       const details = 'https://api.themoviedb.org/3/movie/'+ id +'?api_key=04ac5e20700da696a4b482b8e3d1c26e&language=en-US&append_to_response=videos,credits,similar,reviews,'
       return (dispatch) => {
           
           fetch(details)
           .then((response) => response.json())
           .then(response => dispatch({
                                   type: actionTypes.OPEN_TRAILER,
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
                                   type: actionTypes.OPEN_TRAILER,
                                   payload: response
                               }))
           .catch( (error) => { dispatch({ type:actionTypes.ERROR }) })
   
       };
   };

   export function closeTrailer() {
    return {
      type: actionTypes.CLOSE_TRAILER,
    }
  }
      