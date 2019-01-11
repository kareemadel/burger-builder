import React from 'react';
import PropTypes from 'prop-types';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
  return (
    <div className={ classes.CheckoutSummary }>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ props.ingredients } />
      </div>
      <div>
        <Button
          btnType="Danger"
          clicked={ props.cancelCheckoutHandler }>CANCEL</Button>
        <Button
          btnType="Success"
          clicked={ props.continueCheckoutHandler }>CONTINUE</Button>
      </div>
    </div>
  );
};

checkoutSummary.propTypes = {
  ingredients: PropTypes.object
};

export default checkoutSummary;
