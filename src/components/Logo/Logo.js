import React from 'react';

import burgerLogo from '../../asssets/images/burger-logo.png';
import classes from './Logo.css';

const logo = () => (
  <div className={ classes.Logo }>
    <img src={ burgerLogo } alt="BugerBuilder"/>
  </div>
);

export default logo;
