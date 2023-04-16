import React from "react"
import { Link } from "react-router-dom"
import { CardHeroe } from './CardHeroe'

export const Cards = ({results}) => {
    return(
        <div className="container">
            <ul className="cards">
                {
                    results != [] ? 
                    results.map(h => (
                        <li className="card-item" key={h.name}>
                            <Link className='a' to={`/hero/${h.id}`}>
                                <CardHeroe url={h.id} />
                            </Link>
                        </li>
                    ))  
                    :
                    <h1>Loading</h1>   
                }
            </ul>
        </div>
    )
}