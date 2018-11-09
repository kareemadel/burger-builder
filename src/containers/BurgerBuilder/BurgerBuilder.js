import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.6,
  cheese: 0.7,
  meat: 1.5,
  bacon: 0.8
};
class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0
  };

  addIngredientHandler = (type) => {
    const updatedIngredients = { ...this.state.ingredients };
    let updatedPrice = this.state.totalPrice;
    updatedIngredients[type]++;
    updatedPrice += INGREDIENT_PRICES[type];
    this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice });
  };

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] > 0) {
      const updatedIngredients = { ...this.state.ingredients };
      let updatedPrice = this.state.totalPrice;
      updatedIngredients[type]--;
      updatedPrice -= INGREDIENT_PRICES[type];
      this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice });
    }
  };

  render() {
    const disabledInfo = {};
    for (let ingredient in this.state.ingredients ) {
      disabledInfo[ingredient] = this.state.ingredients[ingredient] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={ this.addIngredientHandler }
          ingredientRemoved={ this.removeIngredientHandler }
          disabled={ disabledInfo }
          price={ this.state.totalPrice } />
      </Aux>
    );
  }
}

export default BurgerBuilder;
