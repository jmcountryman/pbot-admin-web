import React, { Component } from 'react';
import queryString from 'query-string';
import axios from 'axios';

class AuthReturn extends Component
{
  constructor()
  {
    super();

    this.state = {
      message: 'Communicating with Discord...',
    };
  }

  componentDidMount()
  {
    const query = queryString.parse(window.location.search);

    if (query.code)
    {
      // TODO: this should be a redux action/saga
      axios.post('/api/auth', { code: query.code }).then((response) =>
      {
        // JWT is header.payload.signature. payload can be atob()-ed to get the username
        localStorage.setItem('jwt', response.data);
        this.setState({ message: 'Saved token in localStorage!' });
      });
    }
  }

  render()
  {
    const { message } = this.state;

    return (
      <p>{message}</p>
    );
  }
}

export default AuthReturn;
