import React, { useState, useEffect } from "react";

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.increment = setInterval(() => {
      this.message =
        this.state.count >= 8
          ? "Boom"
          : this.state.count % 2 === 0
          ? "tick"
          : "tock";
      console.log(this.state.count, this.message);
      if (this.state.count >= 8) {
        clearInterval(this.increment);
      }
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.increment);
  }

  render() {
    return (
      <div className="Bomb">
        <p>{this.message}</p>
      </div>
    );
  }
}

export function BombFunction() {
  const [count, setCount] = useState(0);


  // useEffect(() => {
  //   console.log("starting interval")
  //   const interval = setInterval(() => {
  //     setCount(function(bob){
  //       console.log("counter: " + bob)
  //       if (bob>= 7) clearInterval(interval)
  //       return bob+1});

  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  useEffect(()=>{
    let increment = count;
    const interval = setInterval(()=>{
      increment++;
      setCount(increment)
      console.log(increment)
      if(increment > 7) clearInterval(interval)
    }, 1000)
  },[])

  const message = count>= 8
      ? "Boom"
      : (count % 2) === 0
      ? "tick"
      : "tock";


  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
