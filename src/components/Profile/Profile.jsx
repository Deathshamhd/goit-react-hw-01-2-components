import React from 'react';

// This is a functional React component called 'Profile'.
// It receives a single prop 'data', and using destructuring, extracts the following properties: username, avatar, location, tag, and stats.
const Profile = ({ data: { username, avatar, location, tag, stats } }) => {
  return (
    <div>
      {/* Render an image with 'avatar' as the source and 'username' as the alt text. */}
      <img srcSet={avatar} alt={username} width={300} />

      {/* Render the 'username' as an H2 heading. */}
      <h2>Name: {username}</h2>

      {/* Render the 'location' as an H3 heading. */}
      <h3>Location: {location}</h3>

      {/* Render the 'tag' as an H4 heading. */}
      <h4>Tag: {tag}</h4>

      {/* Render an H4 heading for statistics. */}
      <h4>Statistics:</h4>

      {/* Render the number of followers from the 'stats' object. */}
      <p>Followers: {stats.followers}</p>

      {/* Render the number of views from the 'stats' object. */}
      <p>Views: {stats.views}</p>

      {/* Render the number of likes from the 'stats' object. */}
      <p>Likes: {stats.likes}</p>
    </div>
  );
};

// Export the 'Profile' component so it can be used in other parts of the application.
export default Profile;