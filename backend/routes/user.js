const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

// Get user by username
router.get('/:username', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post('/update', async (req, res) => {
    try {
        //const { username } = req.params;
        const { username, story, interests, experiences } = req.body;

        // Find user by username and update the fields
        const updatedUser = await User.findOneAndUpdate(
            { username: username },
            {
                $set: {
                    story: story || "",
                    interests: interests || [],
                    experiences: experiences || []
                }
            },
            { new: true, useFindAndModify: false } // Return the updated user
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;
