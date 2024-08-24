const express = require('express');
const router = express.Router();
const Mood = require('../models/mood.model');

// Helper function to check if the date is today
const isToday = (someDate) => {
    const today = new Date();
    return someDate.getDate() === today.getDate() &&
           someDate.getMonth() === today.getMonth() &&
           someDate.getFullYear() === today.getFullYear();
};

const recommendations = {
    'happy': [
        { title: 'Maintaining Your Happiness', content: 'Tips on sustaining a happy mood.' },
        { title: 'Happy Playlist', content: 'Music to keep you smiling.' }
    ],
    'sad': [
        { title: 'Overcoming Sadness', content: 'Strategies to deal with sad feelings.' },
        { title: 'Supportive Communities', content: 'Find groups that can help uplift your spirits.' }
    ],
    'anxious': [
        { title: 'Managing Anxiety', content: 'Learn coping strategies to handle anxiety effectively.' },
        { title: 'Meditation Techniques', content: 'Guided meditations to help soothe your mind.' }
    ],
    'stressed': [
        { title: 'Stress Relief Methods', content: 'Ways to reduce stress in your daily life.' },
        { title: 'Yoga for Relaxation', content: 'Yoga routines to help alleviate stress.' }
    ],
    'energetic': [
        { title: 'Channeling Your Energy', content: 'Activities to harness and direct your energy positively.' },
        { title: 'High-Energy Sports', content: 'Engage in sports that boost your adrenaline and fitness.' }
    ],
    'melancholic': [
        { title: 'Understanding Melancholy', content: 'Explore the depths of melancholic emotions and their creative power.' },
        { title: 'Artistic Expression', content: 'Use art to express and process melancholic feelings.' }
    ]
};

// Create a new mood entry for today only
router.post('/', async (req, res) => {
    const { mood, description, timeOfDay, date } = req.body;
    const moodDate = new Date(date);

    // Check if the mood is being logged for today's date
    if (!isToday(moodDate)) {
        return res.status(400).json({ message: 'Mood can only be logged for today' });
    }

    try {
        const newMood = new Mood({ mood, description, timeOfDay, date: new Date() }); // Always use the current date for logging
        await newMood.save();
        res.json(newMood);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get moods by date (for past and today, not future)
router.get('/:date', async (req, res) => {
    try {
        const { date } = req.params; // Assuming date is passed as a query parameter 'date=YYYY-MM-DD'
        const startDate = new Date(date);
        startDate.setHours(0, 0, 0, 0); // Set the start of the day

        const endDate = new Date(date);
        endDate.setHours(23, 59, 59, 999); // Set the end of the day

        const moods = await Mood.find({
            date: {
                $gte: startDate,
                $lte: endDate
            }
        });

        res.status(200).json(moods);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Fetch the most recent mood entry
router.get('/moods/last5', async (req, res) => {
    try {
        const last5Moods = await Mood.find()
            .sort({ date: -1 }) // Sort by date in descending order
            .limit(5); // Limit to 5 entries

        res.status(200).json(last5Moods);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching moods', error: error.message });
    }
});

router.get('/moods/recommendations', async (req, res) => {
    try {
        const last5Moods = await Mood.find()
            .sort({ date: -1 })
            .limit(5);

        // Determine the most frequent mood
        const moodFrequency = {};
        last5Moods.forEach(mood => {
            if (moodFrequency[mood.mood]) {
                moodFrequency[mood.mood]++;
            } else {
                moodFrequency[mood.mood] = 1;
            }
        });

        const mostFrequentMood = Object.keys(moodFrequency).reduce((a, b) => moodFrequency[a] > moodFrequency[b] ? a : b, null);

        // Fetch recommendations for the most frequent mood
        const moodRecommendations = recommendations[mostFrequentMood] || [];

        res.status(200).json({
            mood: mostFrequentMood,
            recommendations: moodRecommendations
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recommendations', error: error.message });
    }
});





module.exports = router;
