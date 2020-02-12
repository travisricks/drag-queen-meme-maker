/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import "../styles/normalize.css";
// import "../styles/variables.scss";
import "../styles/App.scss";
import Navbar from "./Navbar.jsx";
import SearchFilters from "./SearchFilters.jsx";
import Meme from "./Meme.jsx";

import { getQuotes } from "../utils/index";
import { generateFakes } from "../utils/faker";

function App() {
  // const fakeData = generateFakes();
  // console.log('fakeData', fakeData)
  // console.log('fakeData[0].quoteImage', fakeData[0].quoteImage)
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [names, setNames] = useState([]);
  const [moods, setMoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);

  const getData = async () => {
    const memeObjects = await getQuotes();
    const result = await Promise.all(memeObjects.map(async x => x));
    setData(result);

    let tmpNames = result.map(item => item.queen);
    let finalNames = [...new Set(tmpNames)].sort();
    setNames(finalNames);

    let tmpMoods = result.map(item => item.emotion);
    let finalMoods = [...new Set(tmpMoods)].sort();
    setMoods(finalMoods);

    await setIsLoading(false);
  };

  const filterByName = async (name) => {
    const memeObjects = await getQuotes();
    const results = await Promise.all(memeObjects.map(async x => x));
    let select = name;
    let tmpFilter = await results;
    const result = await tmpFilter.filter(item => item.queen === select);
    await setFilteredData(result);
    await setIsFiltered(true);
  };

  const filterByMood = async (mood) => {
    const memeObjects = await getQuotes();
    const results = await Promise.all(memeObjects.map(async x => x));
    let select = mood;
    let tmpFilter = await results;
    // tmpFilter = [...results];
    const result = await tmpFilter.filter(item => item.emotion === select);
    await setFilteredData(result);
    await setIsFiltered(true);
  };

  const homeClick = () => {
    setIsFiltered(false);
  }
  useEffect(() => {
    getData();
    // filterByName();
  }, []);
  return (
    <div className="App">
      <Navbar clickHome={homeClick} />
      <div className="wrapper">
        <h1>Find a meme with sass.</h1>
        {!isLoading && <SearchFilters names={names} moods={moods} click={filterByName} clickMood={filterByMood} />}

        <div className="images">
          {/* {users.map((user)=><User name={user.name}/>)} */}

          {!isLoading &&
            !isFiltered &&
            data.map(item => (
              <Meme name={item.queen} img={item.img} quote={item.quote} />
            ))}
          {!isLoading &&
            isFiltered &&
            filteredData.map(item => (
              <Meme name={item.queen} img={item.img} quote={item.quote} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
