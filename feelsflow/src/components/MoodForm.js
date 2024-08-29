import React, { useState } from 'react';

function MoodForm({ onMoodSubmit, onCancel, selectedDate }) {
    const [mood, setMood] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (mood && description) {
            // Pass the mood and description back to the parent component
            onMoodSubmit({ mood, description });
        } else {
            alert('Please fill out both fields.');
        }
    };

    return (
        <form className="mood-form" onSubmit={handleSubmit}>
            <h3>Log Your Mood for {selectedDate.toLocaleDateString()}</h3>
            <div>
                <label>Mood:</label>
                <select value={mood} onChange={(e) => setMood(e.target.value)}>
                    <option value="">Select mood</option>
                    <option value="Calm">😊 Calm</option>
                    <option value="Anxious">😟 Anxious</option>
                    <option value="Happy">😁 Happy</option>
                    <option value="Sad">😢 Sad</option>
                    <option value="Excited">😃 Excited</option>
                    <option value="Angry">😡 Angry</option>
                </select>
            </div>

            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe how you are feeling..."
                ></textarea>
            </div>

            <div className="form-actions">
                <button type="submit">Log Mood</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default MoodForm;
