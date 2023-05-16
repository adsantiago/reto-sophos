import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";

export const CardVillain = ({ url }) => {

    const [villain, setVillain] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3004/villain/${url}`)
            .then(res => setVillain(Object.values(res.data)))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            {
                villain.map(villain => (
                    <div className="card text-center" key={villain.id}>
                        <div className='card-header'>
                            <h5 className="card-title">{villain.nickname}</h5>
                        </div>
                        <div className="card-body"><img src={villain.image} alt="heroe" width="200" height="250" /></div>
                        <div className="card-footer">{villain.gender}</div>
                    </div>
                ))
            }
        </div>
    )
}