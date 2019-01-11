import React from 'react';
import PropTypes from 'prop-types';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let ingredientsArr = [];
  Object.keys(props.ingredients || {})
    .forEach((ingredientKey) => {
      for (let i = 0; i < props.ingredients[ingredientKey]; i++) {
        ingredientsArr.push(<BurgerIngredient key={ ingredientKey + i } type={ ingredientKey }/>);
      }
    });

  if (ingredientsArr.length === 0) {
    ingredientsArr = <p>Please start adding ingredients.</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      { ingredientsArr }
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

burger.propTypes = {
  ingredients: PropTypes.shape({
    'bread-top': PropTypes.number,
    'cheese': PropTypes.number,
    'meat': PropTypes.number,
    'bread-bottom': PropTypes.number,
  })
};

export default burger;
