import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthReturn from './auth-return';
import SignInButton from './sign-in-button';
import LogOut from './log-out';

export const AuthPage = ({ authenticated }) => (
  <Switch>
    {/* Allow access to `/auth/logout` when authenticated */}
    <Route path="/auth/logout" component={LogOut} />
    {/* Redirect to `/` for other paths if already authenticated */}
    {authenticated && <Redirect to="/" />}
    <Route path="/auth/login" component={SignInButton} />
    <Route path="/auth/return" component={AuthReturn} />
  </Switch>
);

AuthPage.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ auth }) => ({ authenticated: !!auth.jwt });


export default connect(mapStateToProps)(AuthPage);
