// Action types
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_FETCHING = 'AUTH_FETCHING';
export const AUTH_FINISHED = 'AUTH_FINISHED';
export const AUTH_FAILED = 'AUTH_FAILED';
export const SET_JWT = 'SET_JWT';

// Action creators
export const authRequest = (code) => (
  {
    type: AUTH_REQUEST,
    code,
  }
);

export const authFetching = () => (
  { type: AUTH_FETCHING }
);

export const authFinished = () => (
  { type: AUTH_FINISHED }
);

export const authFailed = (message) => ({
  type: AUTH_FAILED,
  message,
});

export const setJwt = (token) => (
  {
    type: SET_JWT,
    jwt: token,
  }
);
