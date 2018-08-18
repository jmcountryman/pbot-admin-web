import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';

const App = function App()
{
  return (
    <div>
      <nav role="navigation" className="navbar is-warning is-fixed-top has-shadow">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            PBot Admin
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item is-active">
              <span className="icon">
                <i className="fa fa-home" />
              </span>
              <span>Home</span>
            </a>
            <a href="/" className="navbar-item">
              <span className="icon">
                <i className="fa fa-table" />
              </span>
              <span>Links</span>
            </a>
            <a href="/" className="navbar-item">
              <span className="icon">
                <i className="fa fa-info" />
              </span>
              <span>About</span>
            </a>
          </div>
          <div className="navbar-end">
            <a href="/" className="navbar-item">
              <span className="icon">
                <i className="fa fa-user" />
              </span>
            </a>
            <a href="/" className="navbar-item">
              <span className="icon">
                <i className="fa fa-sign-out" />
              </span>
            </a>
          </div>
        </div>
      </nav>
      <section className="section columns">
        <aside className="menu is-2">
          <p className="menu-label">
            General
          </p>
          <ul className="menu-list">
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/">Customers</a>
            </li>
          </ul>
        </aside>
        <div className="container">
          <h1 className="title">
            Hello World
          </h1>
          <p className="subtitle">
            My first website with
            {' '}
            <strong>Bulma</strong>
            !
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
