import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    isLoading: true
  }

  async componentDidMount() {
    try {
      const ordersResponse = await axios.get('orders.json');
      const orders = [];
      for (let key in ordersResponse.data) {
        orders.push({
          ...ordersResponse.data[key],
          id: key
        });
      }
      this.setState({ orders: orders, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const orders = this.state.isLoading ? <Spinner /> : (
      this.state.orders.map(order => (
        <Order key={ order.id }
          price={ +order.price }
          ingredients={ order.ingredients }/>
      ))
    );
    return (
      <div>
        { orders }
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
