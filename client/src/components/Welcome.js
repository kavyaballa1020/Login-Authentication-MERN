// client/src/components/Welcome.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Welcome = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchWelcomeMessage = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token stored');

        const config = {
          headers: {
            Authorization: token,
          },
        };

        const res = await axios.get('/api/welcome', config);
        setMessage(res.data);
      } catch (error) {
        console.error('Fetch welcome message error:', error);
        // Handle error state or redirect to login
      }
    };

    fetchWelcomeMessage();
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      <p>{message}</p>
    </div>
  );
};

export default Welcome;
