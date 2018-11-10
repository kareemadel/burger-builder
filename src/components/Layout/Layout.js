import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux';
import Classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  SideDrawerClosedHandler = () => this.setState({ showSideDrawer: false });
  toggleDrawerHandler = () => this.setState((prevState) => {
    this.setState({ showSideDrawer: !prevState.showSideDrawer });
  });

  render() {
    return (
      <Aux>
        <Toolbar toggleDrawer={ this.toggleDrawerHandler }/>
        <SideDrawer
          open={ this.state.showSideDrawer }
          closed={this.SideDrawerClosedHandler}/>
        <main className={ Classes.Content }>
          { this.props.children }
        </main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element
};


export default Layout;
