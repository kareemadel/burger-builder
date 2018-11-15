import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: 0.6,
  cheese: 0.7,
  meat: 1.5,
  bacon: 0.8
};
class BurgerBuilder extends Component {

  state = {
    ingredients: null,
    totalPrice: 0,
    purchasing: false,
    isLoading: false,
    error: null
  };

  async componentDidMount() {
    const ingredientsResponse = await axios.get('https://butgerbuilder.firebaseio.com/ingredients.json');
    if (ingredientsResponse && ingredientsResponse.data) {
      this.setState({ ingredients: ingredientsResponse.data });
    } else {
      this.setState({ error: true });
    }
  }

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
  purchaseContinueHandler = async () => {
    const query = [];
    for (let ingredient in this.state.ingredients) {
      query.push(`${encodeURIComponent(ingredient)}=${encodeURIComponent(this.state.ingredients[ingredient])}`);
    }
    query.push(`price=${this.state.totalPrice}`);
    const queryStr = query.join('&');
    this.props.history.push({
      pathname: '/check-out',
      search: `?${queryStr}`
    });
  };

  render() {
    const disabledInfo = {};
    for (let ingredient in this.state.ingredients ) {
      disabledInfo[ingredient] = this.state.ingredients[ingredient] <= 0;
    }
    disabledInfo['order'] = Object.values(disabledInfo).every((elem) => elem);

    let orderSummary = null;

    let burger = this.state.error? <p>ingredients can not be fetched.</p> : <Spinner />;
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
            ingredientAdded={ this.addIngredientHandler }
            ingredientRemoved={ this.removeIngredientHandler }
            disabled={ disabledInfo }
            price={ this.state.totalPrice }
            ordered={ this.purchaseHandler } />
        </Aux>
      );
      orderSummary = <OrderSummary
        ingredients={ this.state.ingredients }
        purchaseCanceled={ this.purchaseCancelHandler }
        purchaseContinued={ this.purchaseContinueHandler }/>;
    }
    if (this.state.isLoading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal show={ this.state.purchasing }
          backDropClicked={ this.purchaseCancelHandler }>
          { orderSummary }
        </Modal>
        { burger }
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
