import React from 'react';
import { useSelector } from 'react-redux';
import './userStyling.css';
import { useDispatch } from 'react-redux';
import { Logout } from '../../redux/loginRedux';
import { useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import user from '../../assets/Gravity/undraw_coding_re_iv62.svg';
function User() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let handleLogout = function (e) {
    e.preventDefault();
    dispatch(Logout()); // Dispatch the `Login` action to the Redux store.
    navigate('/');
  };
  const UserData = useSelector(state => state.auth.UserData);
  return (
    <div className="user-data">
      <img src={user} alt="" />
      <div className="account-infos">
        {' '}
        <h1>Username: {UserData.username}</h1>{' '}
        <p>
          <span>
            <LockIcon />{' '}
          </span>{' '}
          This account is private{' '}
        </p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        distinctio modi eum dolore iure porro vero dicta aperiam dolorum
        doloribus minus illo exercitationem sit possimus quos, soluta veniam
        explicabo optio, maiores dolorem numquam suscipit, quaerat id. Vel
        possimus voluptatum, magnam rerum debitis amet sit qui in, dolore illum
        pariatur aliquid?
      </p>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
}

export default User;
