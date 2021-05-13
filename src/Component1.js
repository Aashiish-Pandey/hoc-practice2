import React, { Component } from 'react';

import IncrementCounter from './withIncrementCounter';

class Component1 extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.count}</h1>
        <h1 onMouseOver={() => this.props.incrementCount()}>
          Hovered {this.props.count} times
        </h1>
      </div>
    );
  }
}

export default IncrementCounter(Component1, 5);
