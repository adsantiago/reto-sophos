import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";

export const CardHeroe = ({url}) => {

    const [heroe, setHeroes] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3004/heroe/${url}`)
            .then(res => setHeroes(Object.values(res.data)))
            .catch(err => console.log(err));
    }, [])

    return(
        <div>
            {
                heroe.map(heroe => (
                    <div className="card" key={heroe.id}>
                        <div className='card-header'>
                            <h5 className="card-title">{heroe.name}</h5>
                        </div>
                        <div className="card-body"><img src={heroe.image} alt="" width="150" height="150" /></div>
                        <div className="card-footer text-center">{heroe.gender}</div>
                    </div>
                ))
            }
        </div>
    )
}