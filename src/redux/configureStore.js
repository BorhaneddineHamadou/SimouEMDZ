import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = [thunk];
if(process.env.MODE_ENV === 'development'){
    middleware.push(logger);
}
export const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));