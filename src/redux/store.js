import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import auth from './auth/reducers';
import saga from './sagas';
import jwtStorageMiddleware from './middleware/jwt-storage-middleware';

const reducers = {
  auth,
};

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  jwtStorageMiddleware,
  sagaMiddleware,
];

const composeEnhancers = process.env.NODE_ENV !== 'production'
  ? composeWithDevTools
  : compose;

const initialState = { auth: { jwt: localStorage.getItem('jwt') } };

const store = createStore(
  combineReducers(reducers),
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(saga);

export default store;
