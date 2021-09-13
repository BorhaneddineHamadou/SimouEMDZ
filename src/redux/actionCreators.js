import * as ActionTypes from './actionTypes';
import {auth, googleAuthProvider, facebookAuthProvider} from '../firebase';
import {createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, signInWithPopup} from 'firebase/auth'

const registerStart = () => ({
    type: ActionTypes.REGISTER_START,
});

const registerSuccess = (user) => ({
    type: ActionTypes.REGISTER_SUCCESS,
    payload: user

});

const registerFailed = (error) => ({
    type: ActionTypes.REGISTER_FAILED,
    payload: error
});


const loginStart = () => ({
    type: ActionTypes.LOGIN_START,
});

const loginSuccess = (user) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: user

});

const loginFailed = (error) => ({
    type: ActionTypes.LOGIN_FAILED,
    payload: error
});


const googleSignInStart = () => ({
    type: ActionTypes.GOOGLE_SIGN_IN_START,
});

const googleSignInSuccess = (user) => ({
    type: ActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user

});

const googleSignInFailed = (error) => ({
    type: ActionTypes.GOOGLE_SIGN_IN_FAILED,
    payload: error
});

const facebookSignInStart = () => ({
    type: ActionTypes.FACEBOOK_SIGN_IN_START,
});

const facebookSignInSuccess = (user) => ({
    type: ActionTypes.FACEBOOK_SIGN_IN_SUCCESS,
    payload: user

});

const facebookSignInFailed = (error) => ({
    type: ActionTypes.FACEBOOK_SIGN_IN_FAILED,
    payload: error
});


const logoutStart = () => ({
    type: ActionTypes.LOGOUT_START,
});

const logoutSuccess = () => ({
    type: ActionTypes.LOGOUT_SUCCESS,

});

const logoutFailed = (error) => ({
    type: ActionTypes.LOGOUT_FAILED,
    payload: error
});


export const registerInitiate = (firstname, lastname, email, phonenum, wilaya, commune, password) => (dispatch) => {
  dispatch(registerStart());
  createUserWithEmailAndPassword(auth, email, password).then(({user}) => {
      updateProfile(user, {
        displayName: firstname +' '+ lastname,
        phoneNumber: phonenum,
        wilaya,
        commune
     });
      dispatch(registerSuccess(user));
  }, (error) => {
      const errmsg = new Error(error.message);
      throw errmsg;
  }).catch((error) => dispatch(registerFailed(error.message)));

}


export const loginInitiate = (email, password) => (dispatch) => {
    dispatch(loginStart());
    signInWithEmailAndPassword(auth, email, password).then(({user}) => {
        dispatch(loginSuccess(user))
    }).catch((error) => dispatch(loginFailed(error.message)));
  
  }

  export const logoutInitiate = () => (dispatch) => {
    dispatch(logoutStart());
    signOut(auth).then(() => {
        dispatch(logoutSuccess());
    }).catch((error) => dispatch(logoutFailed(error.message)));
  
  }

  export const googleSignInInitiate = () => (dispatch) => {
    dispatch(googleSignInStart());
    signInWithPopup(auth, googleAuthProvider).then(({user}) => {
        dispatch(googleSignInSuccess(user))
    }).catch((error) => dispatch(googleSignInFailed(error.message)));
  
  }

  export const facebookSignInInitiate = () => (dispatch) => {
    dispatch(facebookSignInStart());
    signInWithPopup(auth, facebookAuthProvider.addScope("user_birthday, email")).then(({user}) => {
        dispatch(facebookSignInSuccess(user))
    }).catch((error) => dispatch(facebookSignInFailed(error.message)));
  
  }