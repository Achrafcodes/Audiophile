import React, { useState, useEffect } from 'react';
import './Layout.css';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useDispatch, useSelector } from 'react-redux';
import { Login, Logout, UserData } from '../../redux/loginRedux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import accounts from '../../redux/Accounts';

/**
 * A React component representing the navigation bar for the application.
 * @function NavBar
 * @returns {JSX.Element} The JSX element representing the navigation bar.
 */
function NavBar() {
  const dispatch = useDispatch(); // Retrieve the `dispatch` function from the Redux store.
  const navigate = useNavigate(); // Retrieve the `navigate` function from the `react-router-dom` package.
  const [formdata, setformData] = useState({
    // Define a state variable called `formdata` and a function to update it, `setformData`.
    username: '',
    password: ''
  });
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // Select the `isLoggedIn` state from the Redux store.
  const [showLogincomp, setShowLogin] = useState(false); // Define a state variable called `showLogincomp` and a function to update it, `setShowLogin`.

  /**
   * Function to show the login component when the user clicks on the login button.
   * @function showLogin
   * @param {Event} e - The click event.
   */
  const showLogin = function (e) {
    e.preventDefault();
    setShowLogin(true);
  };

  /**
   * Function to hide the login component when the user clicks on the close button.
   * @function hideLogin
   * @param {Event} e - The click event.
   */
  const hideLogin = function (e) {
    e.preventDefault();
    setShowLogin(false);
  };

  /**
   * Function to update the `formdata` state variable when the user types in the username or password fields.
   * @function handleChange
   * @param {Event} e - The change event.
   */
  const handleChange = function (e) {
    const { name, value } = e.target;
    setformData(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  /**
   * Function to handle the login form submission. Checks if the user's credentials are valid, dispatches a `Login` action to the Redux store, and navigates to the user's account page.
   * @function handleSubmit
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = function (e) {
    e.preventDefault();
    const account = accounts.find(
      acct =>
        acct.username === formdata.username &&
        acct.password === formdata.password
    );
    if (account) {
      dispatch(Login()); // Dispatch the `Login` action to the Redux store.
      setShowLogin(false); // Hide the login component.
      dispatch(UserData(formdata)); // Dispatch the `UserData` action to the Redux store with the user's data.
    } else {
      alert('Invalid username or password!'); // Show an alert if the user's credentials are invalid.
    }
  };

  /**
   * Function to navigate to the user's account page.
   * @function AccountData
   * @param {Event} e - The click event.
   */
  const AccountData = function (e) {
    e.preventDefault();
    navigate('/user'); // Navigate to the '/user' route.
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
            <span>
              {' '}
              <AccountCircleIcon className="user" onClick={AccountData} />
            </span>
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
            <p className="hidden error">please enter some valid information</p>
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
