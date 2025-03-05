import React from 'react';
import './profile.css';

function Profile() {
  return (
    <div className="page-container">
      {/* Cover Photo Section */}
      <div className="cover-photo">
        {/* Replace the src with your cover image */}
        <img
          src="https://via.placeholder.com/1200x350.png?text=Cover+Photo"
          alt="Cover"
          className="cover-img"
        />
      </div>

      {/* Profile Header Section */}
      <div className="profile-header">
        <div className="profile-image-container">
          {/* Replace with your profile image */}
          <img
            src="https://via.placeholder.com/150.png?text=Profile+Photo"
            alt="Profile"
            className="profile-img"
          />
        </div>

        <div className="profile-info">
          <h1 className="profile-name">Sachin Tendulkar</h1>
          <p className="profile-meta">38M followers · 22 following</p>
          <button className="follow-btn">Follow</button>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="nav-menu">
        <ul>
          <li className="active">Posts</li>
          <li>About</li>
          <li>Mentions</li>
          <li>Photos</li>
          <li>More</li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="content-section">
        {/* Left column: Intro or Page info */}
        <div className="intro-section">
          <h2>Intro</h2>
          <p>The Official Facebook page of Sachin Tendulkar.</p>
          <p className="intro-sub">Page · Sportsperson</p>
        </div>

        {/* Right column: Posts */}
        <div className="posts-section">
          <h2>Posts</h2>
          {/* Example post placeholder */}
          <div className="post">
            <p>No posts yet! This is where your posts will appear.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
