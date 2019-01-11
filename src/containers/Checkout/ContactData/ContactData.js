import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state ={
    customer: {
      name: '',
      address: {
        street: '',
        zipCode: '',
        country: ''
      },
      email: ''
    },
    deliveryMethod: '',
    isLoading: false
  };

  orderHandler = async (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: this.state.customer
    };
    await axios.post('orders.json', order);
    this.setState({ isLoading: false });
    this.props.history.push('/');
  }

  render() {
    const form = this.state.isLoading ? (<Spinner />) : (
      <form>
        <input type="text" name="name" placeholder="Your Name"/>
        <input type="text" name="street" placeholder="Your Street"/>
        <input type="text" name="zipCode" placeholder="Your Zip Code"/>
        <input type="text" name="country" placeholder="Your Country"/>
        <input type="email" name="email" placeholder="Your Email"/>
        <Button btnType="Success" clicked={ this.orderHandler }>ORDER</Button>
      </form>
    );
    return (
      <div className={ classes.ContactData }>
        <h4>Enter your contact data.</h4>
        { form }
      </div>
    );
  }
}

export default ContactData;
