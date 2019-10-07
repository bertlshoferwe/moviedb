export const actionTypes = {
    MEDIA_POPULAR             : 'media_popular',
    PEOPLE_POPULAR            : 'people_popular',
    MOVIE_POPULAR             : 'movie_popular',
    TV_POPULAR                : 'tv_popular',
    HOME_ERROR                : 'home_error'
  }
  
  export const getHomeInfo = () => {  
    const url = 'https://api.themoviedb.org/3/trending/all/day?api_key=04ac5e20700da696a4b482b8e3d1c26e'

    return (dispatch) => {
        fetch(url)
        .then((response) => response.json())
        .then(response => dispatch({
                                type: actionTypes.MEDIA_POPULAR,
                                payload: response
                            }))
        .then(dispatch(getPopularMovie( dispatch )))
        .then(dispatch(getPopularTv( dispatch )))
        .then(dispatch(getPopularPeople( dispatch )))
        .catch( (error) => { dispatch({ type:actionTypes.HOME_ERROR }) })
    };
};

const getPopularMovie = (dispatch) =>{
    const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=04ac5e20700da696a4b482b8e3d1c26e'

    
    return ( dispatch ) => {
        
        fetch(url)
        .then((response) => response.json())
        .then(response => dispatch({
                                type: actionTypes.MOVIE_POPULAR,
                                payload: response
                            }))
        .catch( (error) => { dispatch({ type:actionTypes.HOME_ERROR }) })
    }

}

const getPopularTv = (dispatch) =>{
    const url = 'https://api.themoviedb.org/3/trending/tv/day?api_key=04ac5e20700da696a4b482b8e3d1c26e'

    
    return ( dispatch ) => {
        
        fetch(url)
        .then((response) => response.json())
        .then(response => dispatch({
                                type: actionTypes.TV_POPULAR,
                                payload: response
                            }))
        .catch( (error) => { dispatch({ type:actionTypes.HOME_ERROR }) })
    }

}

const getPopularPeople = (dispatch) =>{
    const url = 'https://api.themoviedb.org/3/trending/person/day?api_key=04ac5e20700da696a4b482b8e3d1c26e'

    
    return ( dispatch ) => {
        
        fetch(url)
        .then((response) => response.json())
        .then(response => dispatch({
                                type: actionTypes.PEOPLE_POPULAR,
                                payload: response
                            }))
        .catch( (error) => { dispatch({ type:actionTypes.HOME_ERROR }) })
    }

}