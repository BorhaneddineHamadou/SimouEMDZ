import * as ActionTypes from './actionTypes';
const initialState={
    isLoading: false,
    currentUser: null,
    error: null
}

const userReducer = (state=initialState, action) => {
  switch(action.type){
      case ActionTypes.LOGIN_START:
      case ActionTypes.REGISTER_START:
      case ActionTypes.LOGOUT_START:   
      case ActionTypes.GOOGLE_SIGN_IN_START: 
      case ActionTypes.FACEBOOK_SIGN_IN_START:
          return {...state, isLoading:true, currentUser: null, error: null}
      case ActionTypes.LOGOUT_SUCCESS:
          return {...state, isLoading: false, currentUser: null, error: null}    
      case ActionTypes.REGISTER_SUCCESS:
      case ActionTypes.LOGIN_SUCCESS:  
      case ActionTypes.GOOGLE_SIGN_IN_SUCCESS:  
      case ActionTypes.FACEBOOK_SIGN_IN_SUCCESS:
          return {...state, isLoading: false, currentUser: action.payload, error: null}
      case ActionTypes.LOGOUT_FAILED:    
      case ActionTypes.REGISTER_FAILED:
      case ActionTypes.LOGIN_FAILED:
      case ActionTypes.GOOGLE_SIGN_IN_FAILED:    
      case ActionTypes.FACEBOOK_SIGN_IN_FAILED:    
          return {...state, isLoading: false, currentUser: null, error: action.payload}    
      default:
          return state;
  }
}

export default userReducer;