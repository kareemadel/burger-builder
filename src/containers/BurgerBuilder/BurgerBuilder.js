import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    totalPrice: 0,
    purchasing: false
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

  purchaseHandler = () => this.setState({ purchasing: true });
  purchaseCancelHandler = () => this.setState({ purchasing: false });
  purchaseContinueHandler = () => alert('You Continue');

  render() {
    const disabledInfo = {};
    for (let ingredient in this.state.ingredients ) {
      disabledInfo[ingredient] = this.state.ingredients[ingredient] <= 0;
    }
    disabledInfo['order'] = Object.values(disabledInfo).every((elem) => elem);
    return (
      <Aux>
        <Modal show={ this.state.purchasing }
          backDropClicked={ this.purchaseCancelHandler }>
          <OrderSummary
            ingredients={ this.state.ingredients }
            purchaseCanceled={ this.purchaseCancelHandler }
            purchaseContinued={ this.purchaseContinueHandler }/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={ this.addIngredientHandler }
          ingredientRemoved={ this.removeIngredientHandler }
          disabled={ disabledInfo }
          price={ this.state.totalPrice }
          ordered={ this.purchaseHandler } />
      </Aux>
    );
  }
}

export default BurgerBuilder;
