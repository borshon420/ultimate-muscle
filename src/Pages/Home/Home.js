import React from 'react';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="header-section">
                <h1>YOU DON'T GET <span>WHAT YOU WISH FOR</span><br/> YOU GET WHAT <span>YOU WORK FOR</span></h1>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;