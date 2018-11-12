import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
  const assignedClasses = [
    classes.SideDrawer,
    props.open ? classes.Open : classes.Close
  ].join(' ');
  return (
    <Aux>
      <Backdrop show={ props.open } clicked={ props.closed }/>
      <div className={ assignedClasses }>
        <div className={ classes.Logo }>
          <Logo />
        </div>
        <NavigationItems />
      </div>
    </Aux>
  );
};

sideDrawer.propTypes = {
  closed: PropTypes.func,
  open: PropTypes.bool
};

export default sideDrawer;
