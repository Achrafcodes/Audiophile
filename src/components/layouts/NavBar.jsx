import React, { useState, useEffect } from 'react'; // import React, useState and useEffect
import './Layout.css'; // import Layout.css
import GoogleIcon from '@mui/icons-material/Google'; // import GoogleIcon from '@mui/icons-material/Google'
import GitHubIcon from '@mui/icons-material/GitHub'; // import GitHubIcon from '@mui/icons-material/GitHub'
import { useDispatch, useSelector } from 'react-redux'; // import useDispatch and useSelector from 'react-redux'
import { Login, Logout } from '../../redux/loginRedux'; // import Login and Logout from '../../redux/loginRedux'
import accounts from '../../redux/Accounts'; // import accounts from '../../redux/Accounts'

function NavBar() {
  let dispatch = useDispatch();
  let [formdata, setformData] = useState({
    username: '',
    password: ''
  });
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  let [showLogincomp, setShowLogin] = useState(false);
  let showLogin = function (e) {
    e.preventDefault();
    setShowLogin(true);
  };
  let hideLogin = function (e) {
    e.preventDefault();
    setShowLogin(false);
  };
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
      setShowLogin(false);
    } else {
      console.log('not valide');
    }
    console.log(isLoggedIn);
  };
  return (
    <>
      <div className="nav-Container">
        <h1 className="logo">
          Coder<span>Store</span>
        </h1>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Items</a>
          </li>
          {isLoggedIn ? (
            <h2 className="username">{formdata.username}</h2>
          ) : (
            <button onClick={showLogin}>Login</button>
          )}
        </ul>
      </div>
      <div
        id="Login"
        className={showLogincomp ? 'Login-container' : 'hidden Login-container'}
      >
        <div className="login">
          <h1>
            Coder'<span>Store</span>
          </h1>
          <form onSubmit={handleSubmit} action="">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="login-input"
              onChange={handleChange}
              placeholder="Username"
              name="username"
              id="username"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="login-input"
              onChange={handleChange}
              placeholder="Password"
              name="password"
              id="password"
            />
            <div className="login-links">
              <h3 onClick={hideLogin} className="back">
                Back
              </h3>
              <button className="submit">Submit</button>
            </div>
          </form>
          <div className="icons">
            <button className="google">
              LOGIN WITH GOOGLE{' '}
              <span>
                <GoogleIcon className="icon google" />
              </span>
            </button>
            <button className="github">
              LOGIN WITH GITHUB{' '}
              <span>
                <GitHubIcon className="icon github" />
              </span>
            </button>
          </div>
          <p className="forgot">Forgotten your password?</p>
        </div>
      </div>
    </>
  );
}

export default NavBar;
