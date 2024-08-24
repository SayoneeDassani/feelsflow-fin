const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
    mood: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    timeOfDay: { type: String, enum: ['Morning', 'Afternoon', 'Evening', 'Night'] },
});

module.exports = mongoose.model('Mood', moodSchema);
