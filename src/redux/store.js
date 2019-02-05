import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

import auth from './auth/reducers';

export default createStore(combineReducers({ auth }), devToolsEnhancer());
