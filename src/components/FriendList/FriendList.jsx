import React from 'react';
import friendData from '../data/friend.json';

// This is a functional React component called 'FriendList'.
// It receives a single prop 'data' which is an array of friend data.
const FriendList = ({ data }) => {
  return (
    <ul>
      {/* Use the map function to iterate through the 'data' array. */}
      {data.map(({ id, isOnline, avatar, name }) => (
        // Each 'li' element should have a unique 'key' prop. 'id' is commonly used for this.
        <li key={id}>
          {/* Render 'online' if 'isOnline' is true, 'offline' if false. */}
          <span>{isOnline ? 'online' : 'offline'}</span>
          {/* Render an image with 'avatar' as the source and "User avatar" as the alt text. */}
          <img src={avatar} alt="User avatar" width="48" />
          {/* Render the 'name' of the friend. */}
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};

// Export the 'FriendList' component so it can be used in other parts of the application.
export default FriendList;