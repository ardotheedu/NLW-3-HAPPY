import React from 'react';
import {FiArrowRight} from 'react-icons/fi'

import '../styles/pages/landing.css'

import logoImg from '../images/Logo.svg'
import { Link } from 'react-router-dom';

function Landing() {
    return(
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy"/>
                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o vida de muitas crianças</p>
                </main>

                <div className="location">
                    <strong>Petrolina</strong>
                    <span>Pernambuco</span>
                </div>

                <Link to="/app" className="enter-app">
                <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </Link>
            </div>
        </div>
    )
}

export default Landing;