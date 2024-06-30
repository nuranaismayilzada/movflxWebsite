import axios from "axios";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./login.scss";
import Footer from '../../components/footer/Footer';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        if (result.data.password === "Success") {
          navigate('/home');
        }
       
         else {
          setError(result.data);
        }
      })
      .catch(err => {
        console.error(err);
        setError("An error occurred. Please try again.");
      });
  };

  const handleButtonClick = () => {
    navigate('/register');
  };

  return (
    <>
      <div className="loginSection">
        <div className="login">
          <h1>LOG-in</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder='Enter your email'
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder='Enter your password'
              name='password'
              className='form-control rounded-0'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="button">LOGIN</button>
            <span>Forgot password?</span>
          </form>
          {error && <p className="error">{error}</p>}
          <p className='acc'>Don't have an account? <span className='regs' onClick={handleButtonClick}>Register</span></p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
