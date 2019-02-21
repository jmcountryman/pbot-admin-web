import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Sidebar = function Sidebar({ items })
{
  return (
    <section className="section columns">
      <aside className="menu is-2">
        {/* <p className="menu-label">
          General
        </p> */}
        <ul className="menu-list">
          {
            items.forEach(item => (
              <li key={item.path}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            ))
          }
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/clips">Welcome Clips</Link>
          </li>
        </ul>
      </aside>
    </section>
  );
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default Sidebar;
