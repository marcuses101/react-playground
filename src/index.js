import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HelloWorld from "./state-drills/HelloWorld";
import Bomb, { BombFunction } from "./state-drills/Bomb";
import {
  RouletteGunClass,
  RouletteGunFunction,
} from "./state-drills/RouletteGun";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <div>
    {/* <RouletteGunClass /> */}
    <RouletteGunClass />
    <RouletteGunFunction bulletInChamber={4}/>
  </div>,

  document.getElementById("root")
);
