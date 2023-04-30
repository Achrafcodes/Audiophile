import React from 'react';
import { useSelector } from 'react-redux';

function User() {
  const UserData = useSelector(state => state.auth.UserData);
  console.log(UserData);
  return (
    <div>
      <h1>User Data:</h1>
      <p>Username: {UserData.username}</p>
      <p>Password: {UserData.password}</p>
    </div>
  );
}

export default User;
