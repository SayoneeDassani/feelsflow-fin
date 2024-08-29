import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Welcome to FeelsFlow!</h1>
                <p>Do share how you are feeling with the community. Chances are they have been through it too - and they might be able to help.</p>
            </header>

            <div className="dashboard-buttons">
                <button className="button" onClick={() => navigate('/moodtracker')}>Mood Tracker</button>
                <button className="button" onClick={() => navigate('/resources')}>Resources</button>
                <button className="button" onClick={() => navigate('/circles')}>Circles</button>
            </div>

            <div className="community-section">
                <div className="community-card green">
                    <h2>A place to be yourself</h2>
                    <p>We welcome everyone over the age of 18. We know what it’s like to struggle sometimes and that a little extra support can make a big difference.</p>
                </div>
                <div className="community-card blue">
                    <h2>Someone to talk to, whenever</h2>
                    <p>Our community is open 24/7. You’ll always have someone to connect with day or night.</p>
                </div>
                <div className="community-card pink">
                    <h2>A safe and trusted place to be</h2>
                    <p>Our community is moderated and protected by our community guidelines.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
