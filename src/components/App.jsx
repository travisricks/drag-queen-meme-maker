/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import logo from "../logo.svg";
import "../styles/normalize.css";
// import "../styles/variables.scss";
import "../styles/App.scss";
import Navbar from "./Navbar.jsx";
import SearchFilters from "./SearchFilters.jsx";
import Meme from "./Meme.jsx";


import { getQuotes } from "../utils/index";
import { generateFakes } from "../utils/faker";

// console.log('quotes', getQuotes());
function App() {
  // const fakeData = generateFakes();
  // console.log('fakeData', fakeData)
  // console.log('fakeData[0].quoteImage', fakeData[0].quoteImage)
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getData = async () => {
    const memeObjects = await getQuotes();
    const result = await Promise.all(memeObjects.map(async x => x));
    setData(result);
    await setIsLoading(false);
    // return;
    // await console.log('result :', result);
    // await console.log('data', this.state);
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div className="App">
     <Navbar />
     <div className="wrapper">
       <h1>Find a meme with sass.</h1>
       <SearchFilters />
  
        <div className="images">
        {/* {users.map((user)=><User name={user.name}/>)} */}

        {!isLoading && data.map((item)=><Meme name={item.queen} img={item.img} quote={item.quote} />)}
          
          {/* <Meme className="imageFlex"/>
          <Meme className="imageFlex"/>
          <Meme className="imageFlex"/>
          <Meme className="imageFlex"/>
          <Meme className="imageFlex"/> */}
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
