import { SET_JWT } from './actions';

export default function (state = {}, action)
{
  switch (action.type)
  {
    case SET_JWT:
      return { ...state, jwt: action.jwt };
    default:
      return state;
  }
}
