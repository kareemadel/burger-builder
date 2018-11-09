import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => {
  return (
    <div className={ classes.BuildControls }>
      <p>Current Price: <strong>{ props.price.toFixed(2) }</strong></p>
      { controls.map((control) => <BuildControl
        key={ control.label }
        label={ control.label }
        type= { control.type }
        added={ props.ingredientAdded }
        removed={ props.ingredientRemoved }
        disabled={ props.disabled[control.type]} />) }
    </div>
  );
};

buildControls.propTypes = {
  ingredientAdded: PropTypes.func.isRequired,
  ingredientRemoved: PropTypes.func.isRequired,
  disabled: PropTypes.shape({
    salad: PropTypes.bool.isRequired,
    bacon: PropTypes.bool.isRequired,
    cheese: PropTypes.bool.isRequired,
    meat: PropTypes.bool.isRequired
  }),
  price: PropTypes.number.isRequired
};

export default buildControls;
