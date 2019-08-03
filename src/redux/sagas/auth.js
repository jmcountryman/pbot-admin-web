import { call, put } from 'redux-saga/effects';

import api from '../../api';
import { setJwt, authFinished, authFailed } from '../auth/actions';

function* authenticate(action)
{
  try
  {
    const authResponse = yield call(api.auth.authenticate, action.code);
    yield put(setJwt(authResponse.data));
    yield put(authFinished());
  }
  catch ({ response })
  {
    const reason = JSON.parse(response.data.reason);
    const errorMessage = `${response.statusText}: ${reason.error_description}`;

    yield put(authFailed(errorMessage));
  }
}

export default authenticate;
