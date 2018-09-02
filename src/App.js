import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';

import Navbar from './navbar/navbar';
import NavbarBrand from './navbar/navbar-brand';
import NavbarItem from './navbar/navbar-item';

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

  return (
    <BrowserRouter>
      <div>
        <Route
          path="/"
          render={() => (
            <div>
              <Navbar brand={<NavbarBrand />} left={navbarLeft} right={navbarRight} />

              <section className="section columns">
                <aside className="menu is-2">
                  <p className="menu-label">
                    General
                  </p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/users">Users</Link>
                    </li>
                    <li>
                      <Link to="/clips">Welcome Clips</Link>
                    </li>
                  </ul>
                </aside>
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
