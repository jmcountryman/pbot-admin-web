import { takeEvery } from 'redux-saga/effects';

import authenticate from './auth';
import { AUTH_REQUEST } from '../auth/actions';

function* saga()
{
  yield takeEvery(AUTH_REQUEST, authenticate);
}

export default saga;
