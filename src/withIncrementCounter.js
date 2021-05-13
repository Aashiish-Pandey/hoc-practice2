import React, { Component } from 'react';

const IncrementCounter = (OrginalComponent, num) => {
  class UpdatedComponent extends Component {
    state = {
      count: 1
    };

    incrementCount = () =>
      this.setState(prevState => {
        return { count: prevState.count + num };
      });

    render() {
      return (
        <OrginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return UpdatedComponent;
};

export default IncrementCounter;
