import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';

import Navbar from './navbar/navbar';
import NavbarBrand from './navbar/navbar-brand';
import NavbarItem from './navbar/navbar-item';

import Sidebar from './sidebar/sidebar';

import AuthPage from './auth/auth-page';

export const App = ({ authenticated }) =>
{
  const navbarLeft = authenticated
    ? [
      <NavbarItem text="Home" href="/" icon="fa-home" key="Home" />,
      <NavbarItem text="Links" href="/" icon="fa-table" key="Links" />,
      <NavbarItem text="About" href="/" icon="fa-info" key="About" />,
    ]
    : [];

  const navbarRight = [
    authenticated
      ? <NavbarItem href="/auth/logout" text="Log Out" icon="fa-sign-out" key="/auth/logout" />
      : <NavbarItem href="/auth/login" text="Log In" icon="fa-sign-in" key="/auth/login" />,
  ];

  const sidebarItems = [
    { path: '/users', text: 'Users' },
    { path: '/clips', text: 'Welcome Clips' },
  ];

  // TODO: most of this should probably be in like AppLayout or something, with routes as children
  return (
    <BrowserRouter>
      <div>
        <Route
          path="/"
          render={() => (
            <div>
              <Navbar brand={<NavbarBrand />} left={navbarLeft} right={navbarRight} />
              <section className="section columns">
                {authenticated && <Sidebar items={sidebarItems} />}
                <div className="container">
                  <Switch>
                    {/* Always allow navigation to `/auth/*` */}
                    <Route path="/auth" component={AuthPage} />
                    {/* Redirect to `/auth/login` for other paths if not authenticated */}
                    {!authenticated && <Redirect to="/auth/login" />}
                  </Switch>
                </div>
              </section>
            </div>
          )
          }
        />
      </div>
    </BrowserRouter>
  );
};

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ auth }) => ({ authenticated: !!auth.jwt });

export default connect(mapStateToProps)(App);
