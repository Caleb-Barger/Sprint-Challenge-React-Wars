import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'

const App = () => {
  const baseURL = 'https://rickandmortyapi.com/api/'
  const addedSearch = 'character/'
  const [data, setData] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`${baseURL}${addedSearch}`)
    .then(res => {
      debugger
    })
    .catch(err => {
      debugger
    })
  }, [])

  return (
    <div className='App'>
      
    </div>
  );
}

export default App;
