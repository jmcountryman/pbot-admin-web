import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import auth from './auth/reducers';
import jwtStorageMiddleware from './middleware/jwt-storage-middleware';

const middleware = [
  jwtStorageMiddleware,
];

const initialState = { auth: { jwt: localStorage.getItem('jwt') } };

export default createStore(
  combineReducers({ auth }),
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);
