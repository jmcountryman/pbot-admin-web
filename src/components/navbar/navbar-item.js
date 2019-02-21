import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavbarItem = function NavBarItem(props)
{
  const { text, href, icon } = props;

  const iconElement = icon ? (
    <span className="icon">
      <i className={`fa ${icon}`} />
    </span>
  ) : null;

  const textElement = text ? (
    <span>{text}</span>
  ) : null;

  return (
    <NavLink to={href} className="navbar-item" activeClassName="is-active">
      {iconElement}
      {textElement}
    </NavLink>
  );
};

NavbarItem.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

NavbarItem.defaultProps = {
  text: null,
  icon: null,
};


export default NavbarItem;
