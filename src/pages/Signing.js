import React, { useState } from 'react';
import "./Signing.css";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = () => {
    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Simulating sign-in logic
    if (email === 'example@example.com' && password === 'password') {
      setError('');
      console.log('Signed in successfully!');
      // You can redirect the user to another page or perform other actions after successful sign-in
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='sign-in-container'>
      <h2>Sign In</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <button onClick={handleSignIn}>Sign In</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignIn;
