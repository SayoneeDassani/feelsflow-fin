/*const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String },
  story: { type: String, default: '' },
  interests: { type: [String], default: [] },  // Array of interests
  experiences: { type: [String], default: [] },  // Array of experiences

});

module.exports = mongoose.model('User', userSchema);*/
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  username: { type: String },  // Make username unique and required
  story: { type: String, default: '' },  // User's story
  interests: { type: [String], default: [] },  // Array of interests
  experiences: { type: [String], default: [] }  // Array of experiences
}, { collection: 'user_details' });  // Specify the collection name as 'user_details'

// Export the User model
module.exports = mongoose.model('User', userSchema);
