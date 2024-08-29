import React from 'react';

function MoodList({ moods }) {
    return (
        <div className="mood-list">
            {moods.map((mood, index) => (
                <div className="mood-item" key={index}>
                    <div className="mood-header">
                        <span className="mood-label">{mood.mood}</span>
                        <h3>{mood.description}</h3>
                    </div>
                    <div className="mood-details">
                        
                        
                        <span><i className="icon">🕒</i> {mood.timeOfDay}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MoodList;
