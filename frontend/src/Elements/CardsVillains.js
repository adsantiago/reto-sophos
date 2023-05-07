import React from "react"
import { Link } from "react-router-dom"
import { CardVillain } from './CardVillain'

export const CardsVillains = ({ results }) => {
    return (
        <div className="container">
            <ul className="cards">
                {
                    results != [] ?
                        results.map(v => (
                            <li className="card-item" key={v.name}>
                                <Link className='a' to={`/villain/${v.id}`}>
                                    <CardVillain url={v.id} />
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
