import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import axios from 'axios';

import { setJwt } from '../../redux/auth/actions';

export class AuthReturn extends Component
{
  componentDidMount()
  {
    const { onAuthComplete } = this.props;
    const query = queryString.parse(window.location.search);

    if (query.code)
    {
      // TODO: this should be a redux saga
      axios.post('/api/auth', { code: query.code }).then((response) =>
      {
        // JWT is header.payload.signature. payload can be atob()-ed to get the username
        onAuthComplete(response.data);
      });
    }
  }

  render()
  {
    return (
      <p>Communicating with Discord...</p>
    );
  }
}

AuthReturn.propTypes = {
  onAuthComplete: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({ onAuthComplete: jwt => dispatch(setJwt(jwt)) });

export default connect(null, mapDispatchToProps)(AuthReturn);
