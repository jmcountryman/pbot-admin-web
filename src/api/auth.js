import axios from 'axios';

const authorize = (code) => (
  axios.post('/api/auth', { code })
);

export default authorize;
