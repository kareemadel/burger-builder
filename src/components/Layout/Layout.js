import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux';
import Classes from './Layout.css';

const layout = (props) => {
  return (
    <Aux>
      <div>Sidedrawer, backdrop, toolbar</div>
      <main className={ Classes.Content }>
        { props.children }
      </main>
    </Aux>
  );
};

layout.propTypes = {
  children: PropTypes.element
};


export default layout;
