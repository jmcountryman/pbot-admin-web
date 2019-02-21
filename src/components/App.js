import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';

import Navbar from './navbar/navbar';
import NavbarBrand from './navbar/navbar-brand';
import NavbarItem from './navbar/navbar-item';

import Sidebar from './sidebar/sidebar';

import SignInButton from './auth/sign-in-button';
import AuthReturn from './auth/auth-return';

const App = function App()
{
  const navbarLeft = [
    <NavbarItem text="Home" href="/" icon="fa-home" key="Home" />,
    <NavbarItem text="Links" href="/" icon="fa-table" key="Links" />,
    <NavbarItem text="About" href="/" icon="fa-info" key="About" />,
  ];

  const navbarRight = [
    <NavbarItem href="/" icon="fa-user" key="/" />,
    <NavbarItem href="/auth/login" icon="fa-sign-in" key="/auth/login" />,
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
                <Sidebar items={sidebarItems} />
                <div className="container">
                  <Route path="/auth/login" render={() => <SignInButton />} />
                  <Route path="/auth/return" render={() => <AuthReturn />} />
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

export default App;
