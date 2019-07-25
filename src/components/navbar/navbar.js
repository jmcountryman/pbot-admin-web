import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ brand, left, right }) => (
  <nav role="navigation" className="navbar is-warning is-fixed-top has-shadow">
    {brand}
    <div className="navbar-menu">
      <div className="navbar-start">
        {left}
      </div>
      <div className="navbar-end">
        {right}
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  brand: PropTypes.node.isRequired,
  left: PropTypes.node,
  right: PropTypes.node,
};

Navbar.defaultProps = {
  left: [],
  right: [],
};

export default Navbar;
