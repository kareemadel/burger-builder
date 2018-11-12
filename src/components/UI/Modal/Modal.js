import React from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Aux>
    <Backdrop show={ props.show } clicked={ props.backDropClicked }/>
    <div
      className={ classes.Modal }
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
      { props.children }
    </div>
  </Aux>
);

modal.propTypes = {
  children: PropTypes.element,
  show: PropTypes.bool,
  backDropClicked: PropTypes.func
};

export default modal;
