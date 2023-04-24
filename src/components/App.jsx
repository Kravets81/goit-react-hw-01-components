import user from './Profile/user';
import data from './Statistics/data';
import friends from './FriendList/friends';
import transactions from './TransactionHistory/transactions';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendLIst from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendLIst items={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
