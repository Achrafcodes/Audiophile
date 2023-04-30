import React from 'react';
import { useSelector } from 'react-redux';

function User() {
  const UserData = useSelector(state => state.auth.UserData);
  console.log(UserData);
  return (
    <div className="user-data">
      <h1>User Data</h1>
    </div>
  );
}

export default User;
