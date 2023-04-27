/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Layout.css';
let Landing = document.querySelector('.Landing');
function NavBar() {
  let [Login, setLogin] = useState(false);
  const showLogin = function (e) {
    e.preventDefault();
    setLogin(prev => !prev);
    Landing.classList.add('blur');
  };

  const HideLogin = function (e) {
    e.preventDefault();
    setLogin(prev => !prev);
  };

  return (
    <>
      <div className="nav-Container">
        <h1 className="logo">
          Coder<span>Store</span>
        </h1>{' '}
        <ul className="nav-links">
          <li>
            {' '}
            <a href="#">Home</a>
          </li>
          <li>
            {' '}
            <a href="#">Categories</a>
          </li>
          <li>
            {' '}
            <a href="#">Items</a>
          </li>
          <button onClick={showLogin}>Login</button>
        </ul>{' '}
      </div>
      <div
        id="Login"
        className={Login ? 'Login-container' : 'hidden Login-container'}
      >
        <div className="login">
          <h1>Please Enter Your Username and Your Password</h1>
          <form action="">
            <label htmlFor="Username">UserName</label>
            <input
              type="text"
              className="login-input"
              name="Username"
              id="Username"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="login-input"
              name="Password"
              id="password"
            />
            <div className="login-links">
              {' '}
              <h3 onClick={HideLogin} className="back">
                back
              </h3>{' '}
              <button className="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default NavBar;
