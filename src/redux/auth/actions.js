// Action types
export const SET_JWT = 'SET_JWT';

export function setJwt(token)
{
  return {
    type: SET_JWT,
    jwt: token,
  };
}
