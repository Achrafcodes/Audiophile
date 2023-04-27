import React from 'react';
import { useRef } from 'react';
import './loginstyling.css';

function Login() {
  const loginRef = useRef(null);
  let loginContainer = document.getElementById('Login');

  let handleBack = function (e) {
    e.preventDefault();
    loginContainer.className += 'hidden';
  };
  const hideLogin = function (e) {
    e.preventDefault();
    if (loginRef.current !== null) {
      loginRef.current.classList.add('hidden');
    }
  };

  return (
    <div id="Login" className="hidden Login-container">
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
  );
}

export default Login;
