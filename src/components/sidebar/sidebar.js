import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ items }) => (
  <aside className="menu column is-2">
    <p className="menu-label">
      Configuration
    </p>
    <ul className="menu-list">
      {
        items.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path} activeClassName="is-active">{item.text}</NavLink>
          </li>
        ))
      }
    </ul>
  </aside>
);

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default Sidebar;
