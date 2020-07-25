import firebase from 'firebase'
export const actionTypes = {
    EMAIL_CHANGED             : 'email_changed',
    PASSWORD_CHANGED          : 'password_changed',
    LOGIN_USER_SUCCESS        : 'login_user_success',
    LOGIN_USER_FAIL           : 'login_user_fail',
    LOGIN_USER                : 'login_user',
    REGISTER_USER_SUCCESS     : 'register_user_success',
    REGISTER_USER_FAIL        : 'register_user_fail',
    REGISTER_USER             : 'register_user',
    SIGN_OUT                  : 'sign_out',
    OPEN_DIALOG               : 'open_dialog',
    CLOSE_DIALOG              : 'close_dialog'
  }

  //Handling user input

  export const emailChanged = (text) => {
    return {
      type: actionTypes.EMAIL_CHANGED,
      payload: text
    };
  };
  
  export const passwordChanged = (text) => {
    return {
      type: actionTypes.PASSWORD_CHANGED,
      payload: text
    };
  };
 
  export const toggleModal = (data) => {
    if (data === true) {
      return {
        type: actionTypes.OPEN_DIALOG,
      };
    }
    if ( data === false) {
      return {
        type: actionTypes.CLOSE_DIALOG,
      };
    }
   
  };

  
  //handleing user login
  
  export const loginUser = ( email, password ) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.LOGIN_USER });
  
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => loginUserFail(dispatch, error));
    };
  };
  
  const loginUserFail = (dispatch, error) => {
    dispatch({ type: actionTypes.LOGIN_USER_FAIL,
              payload: error.message
     });
  };
  
  const loginUserSuccess = (dispatch, user) => {
    dispatch({
      type: actionTypes.LOGIN_USER_SUCCESS,
      payload: user
    });
  
  };
  
  export const registerUser = (email, password ) => {
    return (dispatch) => {
    
      dispatch({ type: actionTypes.REGISTER_USER });
  
      firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => registerUserSuccess(dispatch, user))
            .catch((error) => registerUserFail(dispatch,error));
    };
  };
  
  const registerUserFail = (dispatch, error) => {
            dispatch( { type: actionTypes.REGISTER_USER_FAIL,
                        payload: error.message })
  };
  
  const registerUserSuccess = (dispatch, user) => {
    dispatch({ 
      type: actionTypes.REGISTER_USER_SUCCESS,
      payload: user
     });  
  };

 /////// handeling user logout /////

 export const signOutUser = () => {
  return (dispatch) => {

    firebase.auth().signOut()
          .then(dispatch(( { type: actionTypes.SIGN_OUT } )))
          .catch((error) => registerUserFail(dispatch,error));
  };
};