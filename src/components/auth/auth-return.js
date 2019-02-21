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
        localStorage.setItem('jwt', response.data);
        onAuthComplete(response.data);
      });
    }
  }

  render()
  {
    const { loading } = this.props;

    let message;

    if (loading)
    {
      message = 'Communicating with Discord...';
    }
    else
    {
      message = 'Saved token in localStorage.';
    }

    return (
      <p>{message}</p>
    );
  }
}

AuthReturn.propTypes = {
  loading: PropTypes.bool,
  onAuthComplete: PropTypes.func.isRequired,
};

AuthReturn.defaultProps = {
  loading: true,
};

const mapStateToProps = state => ({ loading: !state.auth.jwt });
const mapDispatchToProps = dispatch => ({ onAuthComplete: jwt => dispatch(setJwt(jwt)) });

export default connect(mapStateToProps, mapDispatchToProps)(AuthReturn);
