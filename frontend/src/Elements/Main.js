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
                            <img class="card-img" src="https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/fight.jpg?v=1684641749449" width="300" height="350" />
                            <div class="d-flex card-img-overlay justify-content-center align-middle align-items-center">
                                <h4 class="card-title text-center align-middle back-opacity">Fight</h4>
                            </div>
                        </div>
                    </Link>
                    
                </div>
                <div className="col-sm d-flex justify-content-center align-middle align-items-center">
                    <Link to={`/heroes`}>
                        <div class="d-flex zoom card bg-dark text-white justify-content-center align-middle align-items-center">
                            <img class="card-img" src="https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/heroes.png?v=1684641754061" width="300" height="350" />
                            <div class="d-flex card-img-overlay justify-content-center align-middle align-items-center">
                                <h4 class="card-title text-center align-middle back-opacity">Heroes</h4>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-sm d-flex justify-content-center align-middle align-items-center">
                    <Link to={`/villains`}>
                        <div class="d-flex zoom card bg-dark text-white justify-content-center align-middle align-items-center">
                            <img class="card-img" src="https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/villains.png?v=1684641752136" width="300" height="350" />
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