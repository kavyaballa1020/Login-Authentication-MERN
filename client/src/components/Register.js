// client/src/components/Register.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      console.log(res.data);
      alert('Registration successful! Please log in.');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={e => onSubmit(e)}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={e => onChange(e)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          minLength="6"
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/">Sign In</Link>
      </p>
    </div>
  );
};

export default Register;
