import React from "react";
import { Link } from "react-router-dom"
import { Header, Title, ContainerHeaderMain } from './Header';

const Main = () => {
    return (
        <div className="container">
            <Header>
                <ContainerHeaderMain>
                    <Title>Guardians of the globe</Title>
                </ContainerHeaderMain>
            </Header>
            <div class="row d-flex justify-content-center align-items-center align-middle">
                <div className="col-sm d-flex justify-content-center align-middle align-items-center">
                    <Link to={`/fight`}>
                        <div class="d-flex zoom card bg-dark text-white justify-content-center align-middle align-items-center">
                            <img class="card-img" src="https://raw.githubusercontent.com/adsantiago/reto-sophos/master/frontend/src/images/fight.jpg" width="300" height="350" />
                            <div class="d-flex card-img-overlay justify-content-center align-middle align-items-center">
                                <h4 class="card-title text-center align-middle back-opacity">Fight</h4>
                            </div>
                        </div>
                    </Link>
                    
                </div>
                <div className="col-sm d-flex justify-content-center align-middle align-items-center">
                    <Link to={`/heroes`}>
                        <div class="d-flex zoom card bg-dark text-white justify-content-center align-middle align-items-center">
                            <img class="card-img" src="https://raw.githubusercontent.com/adsantiago/reto-sophos/master/frontend/src/images/heroes.png" width="300" height="350" />
                            <div class="d-flex card-img-overlay justify-content-center align-middle align-items-center">
                                <h4 class="card-title text-center align-middle back-opacity">Heroes</h4>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-sm d-flex justify-content-center align-middle align-items-center">
                    <Link to={`/villains`}>
                        <div class="d-flex zoom card bg-dark text-white justify-content-center align-middle align-items-center">
                            <img class="card-img" src="https://raw.githubusercontent.com/adsantiago/reto-sophos/master/frontend/src/images/villains.png" width="300" height="350" />
                            <div class="d-flex card-img-overlay justify-content-center align-middle align-items-center">
                                <h4 class="card-title text-center align-middle back-opacity">Villains</h4>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Main;