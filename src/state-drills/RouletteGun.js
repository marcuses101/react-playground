import React, { useState, useEffect } from "react";

export function RouletteGunFunction(props) {
  const { bulletInChamber = 8 } = props;
  const [chamber, setChamber] = useState(null);
  const [chamberSpinning, setChamberSpinning] = useState(false);
  const [timeout, setTime] = useState(null);

  function handleClick() {
    console.log("click");
    setChamberSpinning(true);
    const rand = Math.ceil(Math.random() * 8);
    const time = setTimeout(() => {
      setChamber(rand);
      setChamberSpinning(false);
      console.log(bulletInChamber, rand);
    }, 2000);
    setTime(time);
  }

  useEffect(() => {
    return () => clearTimeout(timeout);
  });

  const message =
    !chamber && !chamberSpinning ? (
      <h3>Play Russian Roulette!</h3>
    ) : chamberSpinning ? (
      <p>spinning the chamber and pulling the trigger!...</p>
    ) : chamber === bulletInChamber ? (
      <p>Bang!!!</p>
    ) : (
      <p>You're safe</p>
    );

  return (
    <div>
      {message}
      <button onClick={handleClick}>Pull the Trigger!</button>
    </div>
  );
}

export class RouletteGunClass extends React.Component {
  static defaultProps = {
    bulletInChamber: 5,
  };
  constructor(props) {
    super(props);
    this.state = {
      spinningTheChamber: false,
      chamber: null,
    };
    this.message = <p>Play Russian Roulette</p>;
  }

  handleClick = () => {
    console.log(this.state.chamber);
  };

  render() {
    return (
      <div>
        {this.message}
        <button onClick={this.handleClick}>Pull the trigger</button>
      </div>
    );
  }
}
