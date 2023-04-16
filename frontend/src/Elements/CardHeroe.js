import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";

export const CardHeroe = ({url}) => {

    const [hero, setHeroe] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3004/hero/${url}`)
            .then(res => setHeroe(Object.values(res.data)))
            .catch(err => console.log(err));
    }, [])

    return(
        <div>
            {
                hero.map(hero => (
                    <div className="card text-center" key={hero.id}>
                        <div className='card-header'>
                            <h5 className="card-title">{hero.name}</h5>
                        </div>
                        <div className="card-body"><img src={hero.image} alt="heroe" width="200" height="250" /></div>
                        <div className="card-footer">{hero.gender}</div>
                    </div>
                ))
            }
        </div>
    )
}