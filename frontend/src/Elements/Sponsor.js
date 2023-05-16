import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Title, Header, ContainerHeader } from './Header';
import BackBtn from './BackBtn';

export const Sponsor = () => {

    const [sponsor, setSponsor] = useState([])
    const [heroe, setHeroes] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3004/')
            .then(res => setHeroes(res.data))
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:3004/sponsor`)
            .then(res => setSponsor(res.data))
            .catch(err => console.log(err));
    }, [])

    console.log(sponsor)
    console.log(heroe)

    return (
        <>
            <div className="container">
                <Header>
                    <ContainerHeader>
                        <Title>Sponsors</Title>
                        <BackBtn></BackBtn>
                    </ContainerHeader>
                </Header>
                <ul className="cards">
                    {
                        heroe != [] ?
                            heroe.map(h => (
                                sponsor.map(s => (
                                    h.id == s.heroe_id ?
                                        <div className="card text-center" key={h.id}>
                                            <div className='card-header'>
                                                <h5 className="card-title">{s.name}</h5>
                                            </div>
                                            <div className="card-body"><img src={h.image} alt="heroe" width="200" height="250" /></div>
                                            <div className="card-footer">{s.source}</div>
                                            <div className="card-footer">${s.quantity}</div>
                                        </div>
                                        :
                                        <React.Fragment key={h.id + s.id} />
                                ))
                            ))
                            :
                            <h1>Loading</h1>
                    }
                </ul>
            </div>
        </>
    )

}

export default Sponsor;
