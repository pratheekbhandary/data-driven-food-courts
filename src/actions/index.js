import firebase from 'firebase';
import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS} from './types';

export const emailChanged= (text) =>{
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged= (password) =>{
    return {
        type: PASSWORD_CHANGED,
        payload: password
    };
};

export const loginUser = ({ email, password , navigation}) => {
    return (dispatch) => {
      dispatch({ type: LOGIN_USER });
  
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => {
          console.log(error);
  
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSuccess(dispatch, user);
                navigation('TabScreen');
            }
        )
            .catch(() => loginUserFail(dispatch));
        });
    };
  };
  
  const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
  };
  
  const loginUserSuccess = (dispatch, user) => {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    });
    };