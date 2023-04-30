import React, { useState } from 'react';
import './LoginFrom.css';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useDispatch } from 'react-redux';
import { Login, Logout, UserData } from '../../redux/loginRedux';
import accounts from '../../redux/Accounts';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let [formdata, setformData] = useState({
    username: '',
    password: ''
  });

  let handleChange = function (e) {
    let { name, value } = e.target;
    setformData(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  let handleSubmit = function (e) {
    e.preventDefault();

    const account = accounts.find(
      acct =>
        acct.username === formdata.username &&
        acct.password === formdata.password
    );

    if (account) {
      dispatch(Login());
      dispatch(UserData(formdata));
    } else {
    }
  };
  return (
    <div className="FormContainer">
      <div className="imgcontainer">
        {' '}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure saepe
        quia nisi tempore ipsam possimus praesentium nam cumque consequuntur
        quod, fugiat officiis, accusamus aperiam ad tenetur tempora temporibus
        reprehenderit odio!
      </div>
    </div>
  );
}

export default LoginForm;
