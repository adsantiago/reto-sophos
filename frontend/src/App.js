import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Cards} from './Elements/Cards';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [heroe, setHeroes] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3004/')
      .then(res => setHeroes(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <>
      <div>
        <Cards results={heroe} />
      </div>
    </>
  )

}

export default App;
