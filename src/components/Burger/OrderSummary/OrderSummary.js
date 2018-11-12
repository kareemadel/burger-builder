import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientsSummary = Object.entries(props.ingredients)
    .map((ingredient) =>
      <li key={ ingredient }>
        <span style={{ textTransform: 'capitalize' }}>{ ingredient[0] }</span>: { ingredient[1] }
      </li>);
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        { ingredientsSummary }
      </ul>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={ props.purchaseCanceled }>CANCEL</Button>
      <Button btnType="Success" clicked={ props.purchaseContinued }>CONTINUE</Button>
    </Aux>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.object,
  purchaseCanceled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired
};

export default orderSummary;
