import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';  // Import the Modal component
import MoodForm from './MoodForm';
import MoodList from './MoodList';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function MoodTracker() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [moods, setMoods] = useState([]);
    const [showForm, setShowForm] = useState(false); // Manage form visibility

    // Fetch moods when the selected date changes
    useEffect(() => {
        const fetchMoods = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/moods/${selectedDate.toISOString().split('T')[0]}`);
                setMoods(response.data);
            } catch (error) {
                console.error('Error fetching moods:', error);
            }
        };

        fetchMoods();
    }, [selectedDate]);

    // Handle mood submission
    const handleMoodSubmit = async (newMood) => {
        try {
            // Make a POST request to save the mood in the database
            const response = await axios.post('http://localhost:5000/api/moods', {
                mood: newMood.mood,
                description: newMood.description,
                date: selectedDate.toISOString().split('T')[0] // Format the date correctly
            });

            console.log('Response from server:', response.data); // Debug log

            // Fetch updated moods after logging the new mood
            const updatedMoods = await axios.get(`http://localhost:5000/api/moods/${selectedDate.toISOString().split('T')[0]}`);
            setMoods(updatedMoods.data); // Update the mood list after submission

            // Close the form (modal) after successful submission
            setShowForm(false);
        } catch (error) {
            console.error('Error logging mood:', error);
        }
    };

    return (
        <div className="mood-tracker-container">
            <div className="date-picker-container">
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    inline
                    maxDate={new Date()} // Disable future dates
                />
                {/* Open the modal when the "Log New Mood" button is clicked */}
                <button onClick={() => setShowForm(true)}>
                    Log New Mood
                </button>
            </div>

            <div className="mood-list">
                {moods.length > 0 ? (
                    <MoodList moods={moods} />
                ) : (
                    <p>No mood logged for this day</p>
                )}

                {/* Render the modal with the form */}
                <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
                    <MoodForm
                        onMoodSubmit={handleMoodSubmit}
                        onCancel={() => setShowForm(false)} // Close the modal when canceled
                        selectedDate={selectedDate} // Pass the selected date to the form
                    />
                </Modal>
            </div>
        </div>
    );
}

export default MoodTracker;
