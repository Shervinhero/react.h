// src/LandingPage.jsx
import React from 'react';
import './LandingPage.css';
import logo from '../public/img.png';  // Adjust the path as needed

function LandingPage() {
    return (
        <div className="landing-page">
            <header className="landing-page-header">
                <img src={logo} className="app-logo" alt="logo" />
                <h1>Welcome to My React App</h1>
                <p>Your journey into the world of React starts here.</p>
                <a href="#explore" className="cta-button">Explore Now</a>
            </header>
        </div>
    );
}

export default LandingPage;
