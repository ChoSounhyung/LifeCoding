import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {   //object
    count: 0
  };
  add = () => {
    this.setState(current => ({count: current.count + 1}));    //state는 object이므로 새로운 state를 받아야함
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  }
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
