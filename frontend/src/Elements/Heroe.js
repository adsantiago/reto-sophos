import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Heroe() {

    const [heroes, setHeroes] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3004/')
            .then(res => setHeroes(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className='container text-center'>
            {/* Info heroe */}
        </div>
    )
}
