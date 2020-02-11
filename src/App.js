import React, {useEffect} from "react";
import logo from "./logo.svg";
import "./App.scss";

import { getQuotes } from "./utils/index";
import { generateFakes } from "./utils/faker";

console.log(getQuotes());
console.log(generateFakes());
function App() {
  const fakeData = generateFakes();
  console.log('fakeData', fakeData)
  console.log('fakeData[0].quoteImage', fakeData[0].quoteImage)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          stuff Edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={fakeData[0].quoteImage} alt="quote"/>
        <img src={fakeData[3].quoteImage} alt="quote"/>
        <img src={fakeData[8].quoteImage} alt="quote"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
