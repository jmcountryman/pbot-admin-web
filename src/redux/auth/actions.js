// Action types
export const SET_JWT = 'SET_JWT';

// Action creators
export function setJwt(token)
{
  return {
    type: SET_JWT,
    jwt: token,
  };
}
