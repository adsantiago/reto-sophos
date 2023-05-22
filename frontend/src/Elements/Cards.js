import React from "react"
import { Link } from "react-router-dom"
import { CardHeroe } from './CardHeroe'
import { ContainerHeader, Title, Header } from "./Header"
import {BackBtn} from "./BackBtn"

export const Cards = ({results}) => {
    return(
        <div className="container">
            <Header>
                <ContainerHeader>
                    <Title>Heroes</Title>
                    <BackBtn></BackBtn>
                </ContainerHeader>
            </Header>
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