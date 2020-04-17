import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import savedResponse from './savedResponse.json'
import Character from './components/Character'
import Container from './components/Container'
import NextPage from './components/NextPage'

const App = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const baseURL = 'https://rickandmortyapi.com/api/character/?page='

  // const addedSearch = `?page=${page}`

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`${baseURL}${page}`)
    .then(res => {
      setData(res.data.results)
    })
    .catch(err => {
      debugger
    })
  }, [page])

  // useEffect(() => {
  //   setData(savedResponse.results)
  //   console.log(data)
  // }, [page])

  return (
    <div className='App'>
      <Container>
        { (data !== []) && data.map((characterInfo, index) => <Character characterInfo={characterInfo} key={index}/>)}
      </Container>
      <NextPage setPage={setPage} page={page}/>
    </div>
  );
}

export default App;
