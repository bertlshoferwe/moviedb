export const actionTypes = {
    OPEN_SEARCHMODAL             : 'open_searchModal',
    CLOSE_SEARCHMODAL            : 'close_searchModal',
    UPDATE_SEARCH_TEXT           : 'update_search_text',
    SEARCH_BAR_RESULTS             : ' search_bar_results',
    NULL_SEARCH_BAR_RESULTS      : ' null_search_bar_results'
  }
  
  export function searchModalOpen() {
    return{
      type: actionTypes.OPEN_SEARCHMODAL,
    }
  }
    
  export function searchModalClose() {
      return{
        type: actionTypes.CLOSE_SEARCHMODAL,
      }
    }

  export function updateSearchValue( text ) {
    const queryString = 'https://api.themoviedb.org/3/search/multi?api_key=04ac5e20700da696a4b482b8e3d1c26e&language=en-US&query=' + text + '&page=1&include_adult=false'
    return (dispatch) => {
      
          dispatch({
            type:actionTypes.UPDATE_SEARCH_TEXT,
            payload: text,
          })
          
        switch(text){
          case '':
                dispatch({
                    type:actionTypes.NULL_SEARCH_BAR_RESULTS,
                  })
          break;
          
          default:
              fetch(queryString)
              .then((response) => response.json())
              .then(response => dispatch({
                                  type: actionTypes.SEARCH_BAR_RESULTS,
                                  payload: response.results,
                              }))
          break;
        }
    }
  }
