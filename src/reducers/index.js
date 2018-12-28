import { combineReducers } from 'redux';
// alias to reduce confusion
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer, 
  streams: streamReducer
});