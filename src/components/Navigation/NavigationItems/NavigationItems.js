import React from 'react';
import PropTypes from 'prop-types';

import classes from './NavigationItems.css';
import NavigationItems from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <nav
    className={ [
      classes.NavigationItems,
      props.isDesktopOnly ? classes.DesktopOnly : null ].join(' ') }>
    <ul>
      <NavigationItems link="/" active>Burger Builder</NavigationItems>
      <NavigationItems link="/">Checkout</NavigationItems>
    </ul>
  </nav>
);

navigationItems.propTypes = {
  isDesktopOnly: PropTypes.bool
};

export default navigationItems;
