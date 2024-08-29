import React, { useState } from 'react';
import { interests, experiences, peerGroups } from '../data/circlesData';
import './Circles.css';

const Circles = () => {
    const [selectedInterest, setSelectedInterest] = useState('');
    const [selectedExperience, setSelectedExperience] = useState('');

    const filteredGroups = peerGroups.filter(group =>
        (selectedInterest && group.interests.includes(selectedInterest)) ||
        (selectedExperience && group.experiences.includes(selectedExperience))
    );

    const handleJoinGroup = () => {
        // Navigate to the generic chat page
        window.open('/chat', '_self');  // '_self' to open in the same tab
    };

    return (
        <div className="circles-page">
            <div className="filter-section">
                <div className="filter-block">
                    <h2>Interests</h2>
                    {interests.map(interest => (
                        <button
                            key={interest}
                            onClick={() => setSelectedInterest(interest)}
                            className={selectedInterest === interest ? 'active' : ''}
                        >
                            {interest}
                        </button>
                    ))}
                </div>
                <div className="filter-block">
                    <h2>Experiences</h2>
                    {experiences.map(experience => (
                        <button
                            key={experience}
                            onClick={() => setSelectedExperience(experience)}
                            className={selectedExperience === experience ? 'active' : ''}
                        >
                            {experience}
                        </button>
                    ))}
                </div>
            </div>
            <div className="group-section">
                {filteredGroups.map(group => (
                    <div key={group.id} className="group-card">
                        <img src={group.image} alt={group.name} />
                        <h3>{group.name}</h3>
                        <p>{group.description}</p>
                        <button onClick={handleJoinGroup}>Join The Support Group</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Circles;
