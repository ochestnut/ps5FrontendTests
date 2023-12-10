import axios from "axios";
import React, { useState } from 'react';

const LoginComponent = ({ onLogin, onError }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost/index.php/user/login", {
        log_username: username,
        log_password: password
      });

      if (response.data.status === 'success') {
        console.log("User logged in successfully", response.data.username);
        // Pass the username to the onLogin prop
        onLogin({ username: response.data.username });

      } else {
        console.error("Error logging in", response.data.error);
      }
    } catch (error) {
      console.error("Error during request:", error);
    }
  };

  return (
    <div className="login-container">
      <a href="registration.php">
        <button className="login-register-button">Register</button>
      </a>
      <h3>LOGIN</h3>
      <form onSubmit={handleSubmit}>
        <div className="login-entries">
          <label htmlFor="log_username">Username</label>
          <input type="text" className="login-form-control" id="log_username" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="login-entries">
          <label htmlFor="log_password">Password</label>
          <input type="password" className="login-form-control" id="log_password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="login-submit-button">LOGIN</button>
      </form>
    </div>
  );
}

export default LoginComponent;