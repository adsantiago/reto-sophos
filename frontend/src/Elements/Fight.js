import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Title, ContainerHeader } from './Header';
import BackBtn from './BackBtn';

export const Fight = () => {

    const [hero, setHero] = useState([])
    const [villain, setVillain] = useState([])
    const [fight, setFight] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3004/villains/`)
            .then(res => setVillain(res.data))
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:3004/`)
            .then(res => setHero(res.data))
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:3004/fight`)
            .then(res => setFight(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            <div className='container'>
                <Header>
                    <ContainerHeader>
                        <Title>Fight</Title>
                        <BackBtn></BackBtn>
                    </ContainerHeader>
                </Header>
                {fight?.map(b =>
                    b.winner == true ? 
                        <div key={`fight-${b.id}`} className="row">
                            {hero.map(h =>
                                h.id == b.heroe_id ? 
                                    <React.Fragment key={`fight-${b.id}-hero-${h.id}`}>
                                        <div className='text-center'>
                                            <h3>V.S</h3>
                                        </div>
                                        <div className="col-sm-6" key={h.name}>
                                            <div className="card text-center">
                                                <div className='card-header'>
                                                    <h5 className="card-title">{h.name}</h5>
                                                </div>
                                                <div className="card-body"><img src={h.image} alt="heroe" width="200" height="250" /></div>
                                                <div className="card-footer">Winner ✅</div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                 : 
                                    null
                            )}
                            <div className="col-sm-6">
                                <div className="card text-center">
                                    {villain.map(v =>
                                        v.id == b.heroe_id ? 
                                            <React.Fragment key={`fight-${b.id}-villain-${v.id}`}>
                                                <div className='card-header'>
                                                    <h5 className="card-title">{v.nickname}</h5>
                                                </div>
                                                <div className="card-body"><img src={v.image} alt="heroe" width="200" height="250" /></div>
                                                <div className="card-footer">Loser ❌</div>
                                            </React.Fragment>
                                         : 
                                         null
                                    )}
                                </div>
                            </div>
                        </div>
                        : 
                        <div key={`fight-${b.id}`} className="row">
                            {hero.map(h =>
                                h.id == b.heroe_id ? 
                                    <React.Fragment key={`fight-${b.id}-hero-${h.id}`}>
                                        <div className='text-center'>
                                            <h3>V.S</h3>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card text-center">
                                                <div className='card-header'>
                                                    <h5 className="card-title">{h.name}</h5>
                                                </div>
                                                <div className="card-body"><img src={h.image} alt="heroe" width="200" height="250" /></div>
                                                <div className="card-footer">Loser ❌</div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                : null
                            )}
                            <div className="col-sm-6">
                                <div className="card text-center">
                                    {villain.map(v =>
                                        v.id == b.heroe_id ? 
                                            <React.Fragment key={`fight-${b.id}-villain-${v.id}`}>
                                                <div className='card-header'>
                                                    <h5 className="card-title">{v.nickname}</h5>
                                                </div>
                                                <div className="card-body"><img src={v.image} alt="heroe" width="200" height="250" /></div>
                                                <div className="card-footer">Winner ✅</div>
                                            </React.Fragment>
                                         : null
                                    )}
                                </div>
                            </div>
                        </div>
                )}
            </div>
        </>
    );

}

export default Fight;