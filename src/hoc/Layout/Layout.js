import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../Aux/Aux';
import Classes from './Layout.module.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

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
  children: PropTypes.node
};


export default Layout;
