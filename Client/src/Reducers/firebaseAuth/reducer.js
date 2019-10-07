import { actionTypes }  from './action'
  
  const INITIAL_STATE = {
    email: '',
    password: '',
    user: '',
    error: '',
    success: '',
    registerEmailError: '',
    registerPasswordError: '',
    registerError: ''
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      //Inputs changed
      case actionTypes.EMAIL_CHANGED:
        return { ...state, email: action.payload };
      case actionTypes.PASSWORD_CHANGED:
        return { ...state, password: action.payload };
      //Login Reducers
      case actionTypes.LOGIN_USER:
        return { ...state, error: '' }; 
      case actionTypes.LOGIN_USER_SUCCESS:
        return { ...state, ...INITIAL_STATE, user: action.payload };
      case actionTypes.LOGIN_USER_FAIL:
        return { ...state, error: action.payload ,success:'', password: '' };
      //Register Reducers  
      case actionTypes.REGISTER_EMAIL_ERROR:
        return{ ...state, registerEmailError: action.payload};
      case actionTypes.REGISTER_PASSWORD_ERROR:
        return{ ...state, registerPasswordError: action.payload}
      case actionTypes.REGISTER_USER:
        return{ ...state, error: ''};
      case actionTypes.REGISTER_USER_SUCCESS:
        return{ ...state, password: '', user: action.payload, success: 'Successfully registered'};
      case actionTypes.REGISTER_USER_FAIL:
        return{ ...state, ...INITIAL_STATE, registerError:action.payload}; 
      default:
        return state;
    }
  };