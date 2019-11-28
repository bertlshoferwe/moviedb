export const actionTypes = {
 MOVIEINFO              : 'movieinfo',
 TVINFO                 : 'tvinfo',
 PEOPLEINFO             : 'peopleinfo',
 ERROR                  : 'error',
 INFOLOADING            : 'inforloading'
  }

export const getMovieInfo = (Data) => {  
    const details = 'https://api.themoviedb.org/3/movie/'+ Data +'?api_key=04ac5e20700da696a4b482b8e3d1c26e&language=en-US&append_to_response=videos,credits,similar,reviews,'

    return (dispatch) => {
        
        fetch(details)
        .then((response) => response.json())
        .then(response => dispatch({
                                type: actionTypes.MOVIEINFO,
                                payload: response
                            }))
        .then(response => setLoading( dispatch ))  
        .catch( (error) => { dispatch({ type:actionTypes.ERROR }) })

    };
};

export const getTvInfo = (Data) => {  
    const details = 'https://api.themoviedb.org/3/tv/'+ Data +'?api_key=04ac5e20700da696a4b482b8e3d1c26e&language=en-US&append_to_response=content_ratings,credits,images,screened_theatrically,similar,videos'

    return (dispatch) => {
        
        fetch(details)
        .then((response) => response.json())
        .then(response => dispatch({
                                type: actionTypes.TVINFO,
                                payload: response
                            }))
        .then(response => setLoading( dispatch )) 
        .catch( (error) => { dispatch({ type:actionTypes.ERROR }) })

    };
};

export const getPeopleInfo = (Data) => {  
    const details = 'https://api.themoviedb.org/3/person/' + Data + '?api_key=04ac5e20700da696a4b482b8e3d1c26e&language=en-US&append_to_response=movie_credits,tv_credits,images'
    return (dispatch) => {
        
        fetch(details)
        .then((response) => response.json())
        .then(response => dispatch({
                                type: actionTypes.PEOPLEINFO,
                                payload: response
                            }))
        .then(response => setLoading( dispatch )) 
        .catch( (error) => { dispatch({ type:actionTypes.ERROR }) })

    };
};

const setLoading = (dispatch) => {
    setTimeout(() => {
        dispatch ({ type: actionTypes.INFOLOADING})
       }, 700) 
}
