import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Title, ContainerHeader } from './Header';

export const Hero = () => {

    const { id } = useParams()
    const [hero, setHero] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3004/hero/${id}`)
            .then(res => setHero(Object.values(res.data)[0]))
            .catch(err => console.log(err));
    }, [])

    let heroabilities
    if (hero.abilities !== undefined){
        heroabilities = hero.abilities.split(',')
    }

    let heropowers
    if(hero.powers !== undefined){
        heropowers = hero.powers.split(',')
    }

    let heroallies
    if (hero.allies !== undefined) {
        heroallies = hero.abilities.split(',')
    }

    let heroenemies
    if (hero.enemies !== undefined) {
        heroenemies = hero.enemies.split(',')
    }

    return (
        <>
            <div>
                <div class="card text-center">
                    <div class="card-header sticky-top">
                        <h5 className='card-header text-capitalize heroes'>
                            <strong>
                                {hero.name}
                            </strong>
                        </h5>
                    </div>
                    <div class="card-body">
                        <img src={hero.image} alt="hero" width="250" height="250" />
                    </div>
                    <div class="card-footer">
                        <ul>
                            <li className='abilities'>
                                <strong>
                                    Abilites
                                </strong>
                            </li>
                            {heroabilities != undefined ?
                                heroabilities.map(ability =>
                                    <li className='card-footer' key={ability}>
                                        {ability}
                                    </li>)

                                :
                                <h1>Loading</h1>
                            }
                        </ul>
                    </div>
                    <div class="card-footer">
                        <ul>
                            <li className='abilities'>
                                <strong>
                                    Powers
                                </strong>
                            </li>
                            {heropowers != undefined ?
                                heropowers.map(power =>
                                    <li className='card-footer' key={power}>
                                        {power}
                                    </li>)

                                :
                                <h1>Loading</h1>
                            }
                        </ul>
                    </div>
                    <div class="card-footer">
                        <ul>
                            <li className='abilities'>
                                <strong>
                                    Age
                                </strong>
                            </li>
                            <li className='card-footer'>
                                {hero.age}
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer">
                        <ul>
                            <li className='abilities'>
                                <strong>
                                    Gender
                                </strong>
                            </li>
                            <li className='card-footer'>
                                {hero.gender}
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer">
                        <ul>
                            <li className='abilities'>
                                <strong>
                                    Specie
                                </strong>
                            </li>
                            <li className='card-footer'>
                                {hero.specie}
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer">
                        <ul>
                            <li className='abilities'>
                                <strong>
                                    Allies
                                </strong>
                            </li>
                            {heroallies != undefined ?
                                heroallies.map(allie =>
                                    <li className='card-footer' key={allie}>
                                        {allie}
                                    </li>)

                                :
                                <h1>Loading</h1>
                            }
                        </ul>
                    </div>
                    <div class="card-footer">
                        <ul>
                            <li className='abilities'>
                                <strong>
                                    Allies
                                </strong>
                            </li>
                            {heroenemies != undefined ?
                                heroenemies.map(enemy =>
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
    );
}

export default Hero;