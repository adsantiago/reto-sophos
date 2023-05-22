import React from "react"
import { Link } from "react-router-dom"
import { CardVillain } from './CardVillain'
import { Header, Title, ContainerHeader } from "./Header"
import {BackBtn} from "./BackBtn"

export const CardsVillains = ({ results }) => {
    return (
        <div className="container">
            <Header>
                <ContainerHeader>
                    <Title>Villains</Title>
                    <BackBtn></BackBtn>
                </ContainerHeader>
            </Header>
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
