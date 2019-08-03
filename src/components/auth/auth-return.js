import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';

import { authRequest } from '../../redux/auth/actions';

export class AuthReturn extends Component
{
  componentDidMount()
  {
    const { doAuth } = this.props;
    const query = queryString.parse(window.location.search);

    doAuth(query.code);
  }

  render()
  {
    const { error } = this.props;

    if (error)
    {
      return (
        <>
          <p>
            An error occurred while logging in:
          </p>
          <article className="message">
            <div className="message-body">
              {error}
            </div>
          </article>
          <p>
            Maybe
            {' '}
            {/* TODO: link directly to Discord oauth page */}
            <Link to="/auth/login">try again</Link>
            ?
          </p>
        </>
      );
    }

    return (
      <p>Communicating with Discord...</p>
    );
  }
}

AuthReturn.propTypes = {
  doAuth: PropTypes.func.isRequired,
  error: PropTypes.string,
};

AuthReturn.defaultProps = {
  error: null,
};

const mapStateToProps = ({ auth }) => (
  { error: auth.error }
);

const mapDispatchToProps = (dispatch) => (
  { doAuth: (code) => dispatch(authRequest(code)) }
);

export default connect(mapStateToProps, mapDispatchToProps)(AuthReturn);
