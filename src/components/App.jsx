import React from 'react';

import Profile from './Profile/Profile.jsx'; // Importing the 'Profile' component.
import FriendList from './FriendList/FriendList.jsx'; // Importing the 'FriendList' component.
import Statistics from 'components/Statistics/Statistics.jsx'; // Importing the 'Statistics' component .
import Transactions from './TransactionHistory/Transactions.jsx'; // Importing the 'Transactions' component

// DATA IMPORT
import profileData from './data/user.json'; // Importing user profile data from a JSON file.
import friendsData from './data/friend.json'; // Importing friend list data from a JSON file.
import statisticsData from './data/data.json'; // Importing statistics data from a JSON file
import transactionsData from './data/transactions.json'; // Importing transaction history data from a JSON file

// style import

const App = () => {
  return (
    <div>
      {/* Rendering the 'Profile' component and passing the 'profileData' as a prop. */}
      <Profile data={profileData} />
      {/* Rendering the 'FriendList' component and passing the 'friendsData' as a prop. */}
      <FriendList data={friendsData} />
      {/* Commented out: This is where the 'Statistics' component would be rendered. */}
      <Statistics data={statisticsData} />
      {/* Commented out: This is where the 'Transactions' component would be rendered. */}
      <Transactions data={transactionsData} />
    </div>
  );
};

export default App; // Exporting the 'App' component as the entry point of your application.



