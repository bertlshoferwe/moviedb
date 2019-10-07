import {push}                                          from 'connected-react-router'
export const actionTypes = {
    ONSEARCHANGE               : 'onsearchange',
    SEARCHED                   : 'searched',
    SEARCHEDNULL               : 'searchednull',
    RESULTS                    : 'results',
    UPDATESEARCH               : 'updatesearch',
    ERROR                       : 'error',
  }

 export const Search = (Query, Page) => {  
   return (dispatch) => { 
        switch(Query){
            case '': dispatch ({
                                type: actionTypes.SEARCHEDNULL,                    
                        })
                break;
            default: dispatch ({
                                type: actionTypes.SEARCHED,
                                payload: Query                    
                        })
                    dispatch(
                        query(dispatch, Query, Page)
                        )
                break;
    }
  };
};
// Extention of search function
const query = (dispatch, Query, Page) => {
    const queryString = 'https://api.themoviedb.org/3/search/multi?api_key=04ac5e20700da696a4b482b8e3d1c26e&language=en-US&query=' + Query + '&page=' + Page + '&include_adult=false'
    return (dispatch) => {
        
        fetch(queryString)
        .then((response) => response.json())
        .then(response => dispatch({
                            type: actionTypes.ONSEARCHANGE,
                            payload: response.results,
                            page: Page,
                            totalPages: response.total_pages
                        }))
        .then(response => setLoading( dispatch ))
        .catch( (error) => { dispatch({ type:actionTypes.ERROR }) })
    };     
};


export const UpdateSearch = (Query, Page) => { 
    const queryString = 'https://api.themoviedb.org/3/search/multi?api_key=04ac5e20700da696a4b482b8e3d1c26e&language=en-US&query=' + Query + '&page=' + Page + '&include_adult=false' 
    return (dispatch) => {
        
        fetch(queryString)
        .then((response) => response.json())
        .then(response => dispatch({
                                type: actionTypes.UPDATESEARCH,
                                payload: response.results,
                                page: response.page,
                                totalPages: response.total_pages,
                            }))
        .then(response => setLoading( dispatch )) 
        .catch( (error) => { dispatch({ type:actionTypes.ERROR }) })

    };
};

const setLoading = (dispatch) => {
    dispatch ({ type: actionTypes.LOADING})
};

export const resultsOfSearch = (Data) => {
    return (dispatch) => {
                     dispatch({
                            type: actionTypes.RESULTS,
                            payload: Data
                        })
                        dispatch(push('/searchResults'))
    };     
};
