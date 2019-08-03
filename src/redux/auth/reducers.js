import {
  AUTH_FETCHING,
  AUTH_FINISHED,
  AUTH_FAILED,
  SET_JWT,
} from './actions';

const initialState = {
  jwt: null,
  fetching: false,
  error: null,
};

export default function (state = initialState, action)
{
  switch (action.type)
  {
    case AUTH_FETCHING:
      return { ...state, fetching: true, error: null };
    case AUTH_FINISHED:
      return { ...state, fetching: false, error: null };
    case AUTH_FAILED:
      return { ...state, fetching: false, error: action.message };
    case SET_JWT:
      return { ...state, jwt: action.jwt };
    default:
      return state;
  }
}
