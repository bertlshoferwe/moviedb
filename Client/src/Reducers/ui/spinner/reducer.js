
import { actionTypes }  from './action'

const initialState = {
  isMobile: false,
  isSpinning: false,
}

export default (state = initialState, action) => {
  switch(action.type) {

  case actionTypes.START_SPINNER:
    return startSpinner(state)

  case actionTypes.STOP_SPINNER:
    return stopSpinner(state)
    
  default:
    return state;

function startSpinner(state) {
  return {
    ...state,
    isSpinning: true
  }
}

function stopSpinner(state) {
  return {
    ...state,
    isSpinning: false
  }
}
}}
