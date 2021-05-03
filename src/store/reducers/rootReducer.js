import authReducer from './authReducer.js';
import projectReducer from './projectReducer.js';
import subscriptionReducer from './subscriptionReducer.js';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	auth: authReducer,
	project: projectReducer,
	subscription: subscriptionReducer
});

export default rootReducer;