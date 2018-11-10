import React from 'react';
import PropTypes from 'prop-types';

import classes from './NavigationItem.css';

const navigationItem = (props) => (
  <li className={ classes.NavigationItem }>
    <a
      href={ props.link }
      className={ props.active ? classes.Active : null }>{ props.children }</a>
  </li>
);

navigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.string
};

export default navigationItem;
