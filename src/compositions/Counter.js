import React, { useState, useEffect } from "react";

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleButtonClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <p>The current class count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>Add 1</button>
      </div>
    );
  }
}

export function CounterFunction() {
  const [count, setCount] = useState(5);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>The current function count: {count}</p>
      <button onClick={increment}>Add 1</button>
    </div>
  );
}
