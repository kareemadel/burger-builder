import React from 'react';
import PropTypes from 'prop-types';

import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
  <div onClick={ props.toggleDrawer } className={ classes.DrawerToggle } >
    <div></div>
    <div></div>
    <div></div>
  </div>
);

drawerToggle.propTypes = {
  toggleDrawer: PropTypes.func
};

export default drawerToggle;
