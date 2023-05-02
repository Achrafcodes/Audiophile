import React, { useState, useEffect } from 'react';
import './Layout.css';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useDispatch, useSelector } from 'react-redux';
import { Login, Logout, UserData } from '../../redux/loginRedux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import accounts from '../../redux/Accounts';
import Logincomponent from './Login';
import Draw from '../../assets/Gravity/undraw_authentication_re_svpt.svg';

/**
 * A React component representing the navigation bar for the application.
 * @function NavBar
 * @returns {JSX.Element} The JSX element representing the navigation bar.
 */
function NavBar() {
  let addBlur = function () {
    let hero = document.querySelector('.hero');
    hero.classList.add('blur');
  };
  let removeBlur = function () {
    let hero = document.querySelector('.hero');

    hero.classList.remove('blur');
  };
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
    addBlur();
  };

  /**
   * Function to hide the login component when the user clicks on the close button.
   * @function hideLogin
   * @param {Event} e - The click event.
   */
  const hideLogin = function (e) {
    e.preventDefault();
    setShowLogin(false);
    removeBlur();
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
  // test
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
      removeBlur();
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
        <div className="imgLogin">
          {' '}
          <img src={Draw} alt="" />{' '}
        </div>{' '}
        <Logincomponent
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          hideLogin={hideLogin}
        />
      </div>
    </>
  );
}

export default NavBar;
