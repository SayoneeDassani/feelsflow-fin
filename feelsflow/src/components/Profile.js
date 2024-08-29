import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState({
    username: "susha101",
    joined: "13 hours ago",
    interests: ["Computers or Technology"],
    experiences: ["Bipolar disorder", "Trauma"],
    avatar: "" // This will hold the base64 encoded image
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUser({...user, avatar: reader.result});
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-info">
          <div className="avatar" style={{ backgroundImage: `url(${user.avatar || '/default-avatar.png'})` }}></div>
          <div className="profile-details">
            <h1>{user.username}</h1>
            <p>Joined {user.joined}</p>
          </div>
        </div>
        <label className="edit-btn">
          Change Picture
          <input type="file" onChange={handleImageChange} style={{ display: 'none' }} />
        </label>
      </div>

      <div className="profile-section">
        <h2>My Interests</h2>
        {user.interests.map((interest, index) => (
          <span key={index} className="profile-tag">{interest}</span>
        ))}
      </div>

      <div className="profile-section">
        <h2>My Experiences</h2>
        {user.experiences.map((exp, index) => (
          <span key={index} className="profile-tag">{exp}</span>
        ))}
      </div>
    </div>
  );
};

export default Profile;
