import { actionTypes }  from './action'

const initialState = {
    isTrailerOpen: false,
    trailerKey: {
                    name:'',
                    key:'',
                },
    error: '',
};

export default (state = initialState, action) => {
    switch(action.type) {
  
    case actionTypes.OPEN_TRAILER:
      return {...state, isTrailerOpen: true, trailerKey: action.payload.videos.results[0] }
  
    case actionTypes.CLOSE_TRAILER:
      return {...state, isTrailerOpen: false, trailerKey: { name:'', key:'' } }
      
    default:
      return state;
  
  }}
