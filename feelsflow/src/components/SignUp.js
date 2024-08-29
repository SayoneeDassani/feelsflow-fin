import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './AuthForm.css';

export const interests = [
    'Animals', 'Arts and Culture', 'Books', 'Computer Technology', // Added "Computer Technology"
    'Cooking and Baking', 'Creativity', 'Fashion', 'Gaming', 'Gardening'
];

export const experiences = [
    'Abuse', 'Addiction', 'Anger', 'Anxiety', 'Bipolar disorder',
    'Depression', 'Dissociative Disorders', 'Eating problems', 'Health Anxiety',
    'Loneliness', 'Trauma' // Added "Trauma" and "Depression" (if not previously included)
];

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        selectedInterest: '',
        selectedExperience: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Signup with:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <div>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div>
                <label>Interest</label>
                <select name="selectedInterest" value={formData.selectedInterest} onChange={handleChange}>
                    <option value="">Select an Interest</option>
                    {interests.map(interest => (
                        <option key={interest} value={interest}>{interest}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Experience</label>
                <select name="selectedExperience" value={formData.selectedExperience} onChange={handleChange}>
                    <option value="">Select an Experience</option>
                    {experiences.map(experience => (
                        <option key={experience} value={experience}>{experience}</option>
                    ))}
                </select>
            </div>
            <button type="submit">Sign Up</button>
            <div>
                <p>Already have an account? <Link to="/">Login</Link></p> {/* Link to Login page */}
            </div>
        </form>
    );
};

export default Signup;
