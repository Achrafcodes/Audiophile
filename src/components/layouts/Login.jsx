import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import './Layout.css';
import GitHubIcon from '@mui/icons-material/GitHub';
function Logincomponent(props) {
  const { handleSubmit, handleChange, hideLogin } = props;

  return (
    <div>
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
          <h3>or</h3>
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
  );
}

export default Logincomponent;
