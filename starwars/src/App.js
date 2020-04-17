import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import savedResponse from './savedResponse.json'
import Character from './components/Character'

const App = () => {
  const baseURL = 'https://rickandmortyapi.com/api/'
  const addedSearch = 'character/'
  const [data, setData] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // useEffect(() => {
  //   axios.get(`${baseURL}${addedSearch}`)
  //   .then(res => {
  //     debugger
  //   })
  //   .catch(err => {
  //     debugger
  //   })
  // }, [])

  useEffect(() => {
    setData(savedResponse.results)
    console.log(data)
  }, [])

  return (
    <div className='App'>
      { (data !== []) && data.map((characterInfo, index) => <Character characterInfo={characterInfo} id={index}/>)}
    </div>
  );
}

export default App;
