import React from "react";
import { TheDate, TheDateClass } from "./compositions/TheDate";
import {CounterClass, CounterFunction} from './compositions/Counter'

function App() {
  return (
    <div>
      <TheDate />
      <TheDateClass />
      <CounterClass />
      <CounterFunction />
    </div>
  );
}

export default App;
