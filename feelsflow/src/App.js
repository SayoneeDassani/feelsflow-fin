import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/dashboard';
import MoodTracker from './components/MoodTracker';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Circles from './components/Circles'; 
import Chat from './components/Chat';
import Login from './components/Login';
import Signup from './components/SignUp';
import './App.css';
import { Avatar } from "@mui/material";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="navbar-logo">
            <Link to="/dashboard"><img src="/logo.png" alt="Logo" className="logo" /></Link>
          </div>
          <ul className="navbar-links">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/moodtracker">MoodTracker</Link></li>
            <li><Link to="/circles">Circles</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="navbar-profile">
            <Link to="/profile">
              {/* Avatar from Material-UI */}
              <Avatar alt="Profile" src="/profile-icon.png" className="profile-icon" />
            </Link>
            
          </div>
        </nav>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/moodtracker" element={<MoodTracker />} />
          <Route path="/circles" element={<Circles/>} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
