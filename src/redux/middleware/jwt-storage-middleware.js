import { SET_JWT } from '../auth/actions';

const jwtStorageMiddleware = () => (next) => (action) =>
{
  if (action.type === SET_JWT)
  {
    if (action.jwt === null)
    {
      localStorage.removeItem('jwt');
    }
    else
    {
      localStorage.setItem('jwt', action.jwt);
    }
  }

  return next(action);
};

export default jwtStorageMiddleware;
