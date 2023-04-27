/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import './Layout.css';

function NavBar() {
  const loginRef = useRef(null);

  const showLogin = function (e) {
    e.preventDefault();
    if (loginRef.current !== null) {
      loginRef.current.classList.remove('hidden');
    }
  };

  const hideLogin = function (e) {
    e.preventDefault();
    if (loginRef.current !== null) {
      loginRef.current.classList.add('hidden');
    }
  };

  return (
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
      <div id="Login" ref={loginRef} className="hidden Login-container">
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
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              className="login-input"
              name="Password"
              id="Password"
            />
            <a onClick={hideLogin} href="#">
              {' '}
              back
            </a>{' '}
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
