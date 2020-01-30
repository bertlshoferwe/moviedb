import { actionTypes }  from './action'
  
  const INITIAL_STATE = {
    email: '',
    password: '',
    user: '',
    loginError: '',
    success: '',
    registerError: '',
    loginDisplay: false,
    loginModalOpen: false,
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      //Inputs changed
      case actionTypes.EMAIL_CHANGED:
        return { ...state, email: action.payload };
      case actionTypes.PASSWORD_CHANGED:
        return { ...state, password: action.payload };
      case actionTypes.OPEN_DIALOG:
          return { ...state, loginModalOpen:true };
      case actionTypes.CLOSE_DIALOG:
          return { ...state, loginModalOpen:false };
      //Login Reducers
      case actionTypes.LOGIN_USER:
        return { ...state, error: '' }; 
      case actionTypes.LOGIN_USER_SUCCESS:
        return { ...state, ...INITIAL_STATE, user: action.payload, loginDisplay: false, loginModalOpen: false };
      case actionTypes.LOGIN_USER_FAIL:
        return { ...state, loginError: action.payload ,success:'', password: '', loginDisplay: true, loginModalOpen: true };
      //Register Reducers  
      case actionTypes.REGISTER_USER:
        return{ ...state, error: ''};
      case actionTypes.REGISTER_USER_SUCCESS:
        return{ ...state, password: '', user: action.payload, success: 'Successfully registered', loginDisplay: true, loginModalOpen: true};
      case actionTypes.REGISTER_USER_FAIL:
        return{ ...state, ...INITIAL_STATE, registerError:action.payload, loginDisplay: false, loginModalOpen: true };
      case actionTypes.SIGN_OUT:
        return { ...state, user: ''}
      default:
        return state;
    }
  };