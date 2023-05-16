import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Title, ContainerHeader } from './Header';
import BackBtn from './BackBtn';

export const Villain = () => {

    const { id } = useParams()
    const [villain, setVillain] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3004/villain/${id}`)
            .then(res => setVillain(Object.values(res.data)[0]))
            .catch(err => console.log(err));
    }, [])

    let villainabilities
    if (villain.abilities !== undefined) {
        villainabilities = villain.abilities.split(',')
    }

    let villainpowers
    if (villain.powers !== undefined) {
        villainpowers = villain.powers.split(',')
    }

    let villainallies
    if (villain.allies !== undefined) {
        villainallies = villain.abilities.split(',')
    }

    let villainenemies
    if (villain.enemies !== undefined) {
        villainenemies = villain.enemies.split(',')
    }

    return(
        <>
            <Header>
                <ContainerHeader>
                    <Title>Villain</Title>
                    <BackBtn></BackBtn>
                </ContainerHeader>
            </Header>
            <div>
                <div className="card text-center">
                    <div className="card-header">
                        <h5 className='card-header text-capitalize villains'>
                            <strong>
                                {villain.nickname}
                            </strong>
                        </h5>
                    </div>
                    <div className="card-body">
                        <img src={villain.image} alt="hero" width="250" height="250" />
                    </div>
                    <div className="card-footer">
                        <ul>
                            <li className='abilities'>
                                <strong>
                                    Abilites
                                </strong>
                            </li>
                            {villainabilities != undefined ?
                                villainabilities.map(ability =>
                                    <li className='card-footer' key={ability}>
                                        {ability}
                                    </li>)

                                :
                                <h1>Loading</h1>
                            }
                        </ul>
                    </div>
                    <div className="card-footer">
                        <ul>
                            <li className='abilities'>
                                <strong>
                                    Powers
                                </strong>
                            </li>
                            {villainpowers != undefined ?
                                villainpowers.map(power =>
                                    <li className='card-footer' key={power}>
                                        {power}
                                    </li>)

                                :
                                <h1>Loading</h1>
                            }
                        </ul>
                    </div>
                    <div className="card-footer">
                        <ul>
                            <li className='abilities'>
                                <strong>
                                    Gender
                                </strong>
                            </li>
                            <li className='card-footer'>
                                {villain.gender}
                            </li>
                        </ul>
                    </div>
                    <div className="card-footer">
                        <ul>
                            <li className='abilities'>
                                <strong>
                                    Specie
                                </strong>
                            </li>
                            <li className='card-footer'>
                                {villain.specie}
                            </li>
                        </ul>
                    </div>
                    <div className="card-footer">
                        <ul>
                            <li className='abilities'>
                                <strong>
                                    Allies
                                </strong>
                            </li>
                            {villainallies != undefined ?
                                villainallies.map(allie =>
                                    <li className='card-footer' key={allie}>
                                        {allie}
                                    </li>)

                                :
                                <h1>Loading</h1>
                            }
                        </ul>
                    </div>
                    <div className="card-footer">
                        <ul>
                            <li className='abilities'>
                                <strong>
                                    Allies
                                </strong>
                            </li>
                            {villainenemies != undefined ?
                                villainenemies.map(enemy =>
                                    <li className='card-footer' key={enemy}>
                                        {enemy}
                                    </li>)
                                :
                                <h1>Loading</h1>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Villain;