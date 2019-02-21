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
    <NavbarItem text="Home" href="/" icon="fa-home" />,
    <NavbarItem text="Links" href="/" icon="fa-table" />,
    <NavbarItem text="About" href="/" icon="fa-info" />,
  ];

  const navbarRight = [
    <NavbarItem href="/" icon="fa-user" />,
    <NavbarItem href="/auth/login" icon="fa-sign-in" />,
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
              <Sidebar items={sidebarItems} />
              <div className="container">
                <Route path="/auth/login" render={() => <SignInButton />} />
                <Route path="/auth/return" render={() => <AuthReturn />} />
              </div>
            </div>
          )
          }
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
