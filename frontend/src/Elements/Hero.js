import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Title, ContainerHeader } from './Header';

export const Hero = () => {

    const { id } = useParams()
    const [hero, setHero] = useState([])
    const [schedule, setSchedule] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3004/hero/${id}`)
            .then(res => setHero(Object.values(res.data)[0]))
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:3004/schedule/${id}`)
            .then(res => setSchedule(Object.values(res.data)[0]))
            .catch(err => console.log(err));
    }, [])

    let heroscheduletime
    if(schedule.scheduletime !== undefined){
        heroscheduletime = schedule.scheduletime
        heroscheduletime = heroscheduletime.split(' ')
    }

    let heroschedule
    if(schedule.schedule !== undefined){
        heroschedule = schedule.schedule
        console.log(heroschedule)
        heroschedule = heroschedule.split(',')
        console.log(heroschedule)
    }
    
    let heroabilities
    if (hero.abilities !== undefined) {
        heroabilities = hero.abilities.split(',')
    }

    let heropowers
    if (hero.powers !== undefined) {
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
                <div className="card text-center">
                    <div className="card-header sticky-top">
                        <h5 className='card-header text-capitalize heroes'>
                            <strong>
                                {hero.name}
                            </strong>
                        </h5>
                    </div>
                    <div className="card-body">
                        <img src={hero.image} alt="hero" width="250" height="250" />
                    </div>
                    <div className="card-footer">
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
                    <div className="card-footer">
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
                    <div className="card-footer">
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
                    <div className="card-footer">
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
                    <div className="card-footer">
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
                    <div className="card-footer">
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
                    <div className="card-footer">
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
                    <div className="card-footer">
                        <ul>
                            <li className='abilities'>
                                <strong>
                                    Schedule
                                </strong>
                            </li>
                            <li className='card-footer'>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Hour</th>
                                            <th scope="col">Monday</th>
                                            <th scope="col">Tuesday</th>
                                            <th scope="col">Wednesday</th>
                                            <th scope="col">Thursday</th>
                                            <th scope="col">Friday</th>
                                            <th scope="col">Saturday</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">7:00am</th>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 1 && day[2] == 7 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 2 && day[2] == 7 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 3 && day[2] == 7 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 4 && day[2] == 7 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 5 && day[2] == 7 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 6 && day[2] == 7 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8:00am</th>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 1 && day[2] == 8 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 2 && day[2] == 8 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 3 && day[2] == 8 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 4 && day[2] == 8 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 5 && day[2] == 8 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 6 && day[2] == 8 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">9:00am</th>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 1 && day[2] == 9 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 2 && day[2] == 9 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 3 && day[2] == 9 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 4 && day[2] == 9 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 5 && day[2] == 9 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 6 && day[2] == 9 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">10:00am</th>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 1 && day[2] == 10 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 2 && day[2] == 10 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 3 && day[2] == 10 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 4 && day[2] == 10 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 5 && day[2] == 10 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 6 && day[2] == 10 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">11:00am</th>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 1 && day[2] == 11 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 2 && day[2] == 11 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 3 && day[2] == 11 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 4 && day[2] == 11 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 5 && day[2] == 11 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 6 && day[2] == 11 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">12:00am</th>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 1 && day[2] == 12 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 2 && day[2] == 12 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 3 && day[2] == 12 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 4 && day[2] == 12 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 5 && day[2] == 12 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 6 && day[2] == 12 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2:00pm</th>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 1 && day[2] == 14 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 2 && day[2] == 14 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 3 && day[2] == 14 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 4 && day[2] == 14 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 5 && day[2] == 14 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 6 && day[2] == 14 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2:00pm</th>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 1 && day[2] == 14 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 2 && day[2] == 14 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 3 && day[2] == 14 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 4 && day[2] == 14 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 5 && day[2] == 14 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 6 && day[2] == 14 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3:00pm</th>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 1 && day[2] == 15 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 2 && day[2] == 15 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 3 && day[2] == 15 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 4 && day[2] == 15 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 5 && day[2] == 15 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 6 && day[2] == 15 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4:00pm</th>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 1 && day[2] == 16 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 2 && day[2] == 16 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 3 && day[2] == 16 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 4 && day[2] == 16 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 5 && day[2] == 16 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 6 && day[2] == 16 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5:00pm</th>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 1 && day[2] == 17 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 2 && day[2] == 17 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 3 && day[2] == 17 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 4 && day[2] == 17 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 5 && day[2] == 17 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 6 && day[2] == 17 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6:00pm</th>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 1 && day[2] == 18 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 2 && day[2] == 18 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 3 && day[2] == 18 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 4 && day[2] == 18 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 5 && day[2] == 18 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {
                                                    heroscheduletime?.map((day, index) =>
                                                        day[0] == 6 && day[2] == 18 ?
                                                            <React.Fragment key={index}>
                                                                {heroschedule[index]}
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment key={index} />
                                                    )
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;