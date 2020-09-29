import React, { useState, useEffect } from "react";

export function TheDate(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const tock = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return function clean() {
      clearInterval(tock);
    };
  }, []);

  return <div>{date.getSeconds()}</div>;
}

export class TheDateClass extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>{this.state.date.getSeconds()}</div>;
  }
}
