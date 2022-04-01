import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from 'reactstrap';
import './styles.css';

import logo from '../../assets/pensa-verde.png';
import icon1 from '../../assets/protecao-da-natureza.png';
import icon2 from '../../assets/protecao-ambiental.png';
import icon3 from '../../assets/reciclar-papel.png';

const Home = () => {
    return (

        <Container className="bg-light border">

            <div id="page-home">
                <div className="content">
                    <header>
                        <img src={logo} alt="Logo Ecoleta" />
                    </header>

                    <main className="center">
                        <h1>Seu marketplace de coleta de resíduos.</h1>
                        <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
                            <Link className="center" to="/points">
                                <span>
                                    <img src={icon1} alt="logo Pontos de Coleta" />
                                </span>
                                <strong>Pontos de Coleta</strong>
                            </Link>

                            <Link to="/create-point">
                                <span>
                                    <img src={icon2} alt="logo cadastrar ponto" />
                                </span>
                                <strong>Cadastre um ponto de coleta</strong>
                            </Link >


                            <Link to="/items">
                                <span>
                                    <img src={icon3} alt="logo sobre itens" />
                                </span>
                                <strong>Sobre os Itens</strong>
                            </Link >
                    </main>
                </div>
            </div>
        </Container>

    );
}

export default Home;