
import { actionTypes }  from './action'

const initialState = {
  isOpen: false,
  searchValue: ' hello ',
  searchBarResults:[
          {
          "id": '',
          "vote_count": '',
          "title": '',
          "name": '',
          "release_date": '',
          "original_title": '',
          "backdrop_path": '',
          "poster_path": '',
          "media_type": '',
          }, 
        ]
}

export default (state = initialState, action) => {
  switch(action.type) {

  case actionTypes.OPEN_SEARCHMODAL:
    return { ...state,  isOpen: true, searchValue: '' }
    
  case actionTypes.CLOSE_SEARCHMODAL:
    return { ...state, isOpen: false, resultsOpen: false }

  case actionTypes.UPDATE_SEARCH_TEXT:
      return  { ...state, searchValue: action.payload }

  case actionTypes.SEARCH_BAR_RESULTS:
      return { ...state, searchBarResults: action.payload }

  case actionTypes.NULL_SEARCH_BAR_RESULTS:
      return { ...state, searchBarResults:[
        {
        "id": '',
        "vote_count": '',
        "title": '',
        "name": '',
        "release_date": '',
        "original_title": '',
        "backdrop_path": '',
        "poster_path": '',
        "media_type": '',
        }, 
      ]  }

      default: 
        return state
      

  }
}
