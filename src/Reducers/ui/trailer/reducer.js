
import { actionTypes }  from './action'

const initialState = {
  isTrailerOpen: true,
  trailerKey: ''
}

export default (state = initialState, action) => {
  switch(action.type) {

  case actionTypes.OPEN_TRAILER:
    return {...state, isTrailerOpen: true, trailerKey: action.payload }

  case actionTypes.CLOSE_TRAILER:
    return {...state, isTrailerOpen: false, trailerKey: '' }
    
  default:
    return state;

}}
