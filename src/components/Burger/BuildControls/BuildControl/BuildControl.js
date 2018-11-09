import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControl.css';

class BuildControl extends Component {

  removedHandler = () => this.props.removed(this.props.type);
  addedHandler = () => this.props.added(this.props.type);

  render(){
    return (
      <div className={ classes.BuildControl }>
        <div className={ classes.Label }>{ this.props.label }</div>
        <button
          className={ classes.Less }
          onClick={ this.removedHandler }
          disabled={ this.props.disabled }>less</button>
        <button
          className={ classes.More }
          onClick={ this.addedHandler }>more</button>
      </div>
    );
  }
}

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  added: PropTypes.func.isRequired,
  removed: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default BuildControl;
