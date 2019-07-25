import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setJwt } from '../../redux/auth/actions';

export class LogOut extends React.Component
{
  componentDidMount()
  {
    const { logOut } = this.props;

    logOut();
  }

  render()
  {
    const { authenticated } = this.props;

    if (authenticated)
    {
      return <p>Logging out...</p>;
    }

    return <Redirect to="/auth/login" />;
  }
}

LogOut.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({ authenticated: !!auth.jwt });
const mapDispatchToProps = dispatch => ({ logOut: () => dispatch(setJwt(null)) });

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
