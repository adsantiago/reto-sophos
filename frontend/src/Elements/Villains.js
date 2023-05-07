import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CardsVillains } from './CardsVillains';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Villains = () => {

    const [villain, setVillain] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3004/villains')
            .then(res => setVillain(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            <div>
                <CardsVillains results={villain} />
            </div>
        </>
    )

}

export default Villains;