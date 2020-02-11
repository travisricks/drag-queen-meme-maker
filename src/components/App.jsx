import React, {useEffect} from "react";
import logo from "../logo.svg";
import "../styles/normalize.css";
// import "../styles/variables.scss";
import "../styles/App.scss";
import Navbar from "./Navbar.jsx";
import SearchFilters from "./SearchFilters.jsx";
import Meme from "./Meme.jsx";


import { getQuotes } from "../utils/index";
import { generateFakes } from "../utils/faker";

console.log(getQuotes());
console.log(generateFakes());
function App() {
  const fakeData = generateFakes();
  console.log('fakeData', fakeData)
  console.log('fakeData[0].quoteImage', fakeData[0].quoteImage)

  return (
    <div className="App">
     <Navbar />
     <div className="wrapper">
       <h1>Find a meme with sass.</h1>
       <SearchFilters />
  
        <div className="images">
          <Meme className="imageFlex"/>
          <Meme className="imageFlex"/>
          <Meme className="imageFlex"/>
          <Meme className="imageFlex"/>
          <Meme className="imageFlex"/>
          <Meme className="imageFlex"/>
          {/* <img src={fakeData[0].quoteImage} alt="quote" className="imageFlex"/>
          <img src={fakeData[3].quoteImage} alt="quote" className="imageFlex"/>
          <img src={fakeData[4].quoteImage} alt="quote" className="imageFlex"/>
          <img src={fakeData[5].quoteImage} alt="quote" className="imageFlex"/>
          <img src={fakeData[6].quoteImage} alt="quote" className="imageFlex"/>
          <img src={fakeData[7].quoteImage} alt="quote" className="imageFlex"/>
          <img src={fakeData[8].quoteImage} alt="quote" className="imageFlex"/> */}
        </div>
     </div>
    </div>
  );
}

export default App;
