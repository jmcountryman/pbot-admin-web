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
      const data = queryString.stringify({
        grant_type: 'authorization_code',
        code: query.code,
        redirect_uri: `${window.location.origin}${window.location.pathname}`,
        scope: 'identify guilds',
        client_id: '431216339894534145',
        client_secret: 'LaJLtKLXpxGrP2h8-w2EOJoK27TIhnqh',
      });

      axios.post('https://discordapp.com/api/oauth2/token', data).then(() => (
        this.setState({ message: 'Signed in with Discord!' })
      ));
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
