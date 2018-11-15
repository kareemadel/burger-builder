import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSammary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state ={
    ingredients: null,
    totalPrice: 0
  }

  componentDidMount () {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let entry of query) {
      if (entry[0] === 'price') {
        price = entry[1];
      } else {
        ingredients[entry[0]] = +entry[1];
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: price });
  }

  cancelCheckoutHandler = () => {
    this.props.history.goBack();
  }
  continueCheckoutHandler = () => {
    this.props.history.push('/check-out/contact-data');
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={ this.state.ingredients }
          cancelCheckoutHandler={ this.cancelCheckoutHandler }
          continueCheckoutHandler={ this.continueCheckoutHandler }/>
        <Route
          path={ this.props.match.url + '/contact-data'}
          render={ (props) => <ContactData
            ingredients={ this.state.ingredients }
            price={ this.state.totalPrice }
            { ...props }/>} />
      </div>
    );
  }
}

export default Checkout;
