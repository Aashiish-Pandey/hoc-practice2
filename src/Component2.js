import React, { Component } from 'react';
import IncrementCounter from './withIncrementCounter';

class Component2 extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <input
          type="button"
          value={`count :${this.props.count}`}
          onClick={() => this.props.incrementCount()}
        />
      </div>
    );
  }
}

export default IncrementCounter(Component2, 100);
