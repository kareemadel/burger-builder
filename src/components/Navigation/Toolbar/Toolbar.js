import React from 'react';
import PropTypes from 'prop-types';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
  <header className={ classes.Toolbar }>
    <DrawerToggle toggleDrawer={ props.toggleDrawer } />
    <Logo>LOGO</Logo>
    <NavigationItems isDesktopOnly={ true } />
  </header>
);

toolbar.propTypes = {
  toggleDrawer: PropTypes.func
};

export default toolbar;
