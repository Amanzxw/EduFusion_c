


// import React, { useState } from 'react';
// import { GoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation
// import "./Signing.css"; // Make sure you have appropriate CSS for styling

// const SignIn = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSigningUp, setIsSigningUp] = useState(true);
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState(''); // State variable for success message

//   const navigate = useNavigate(); // Hook for navigation

//   const handleSignUp = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior

//     // Simple validation
//     if (!fullName || !email || !password) {
//       setError('Please enter your full name, email, and password');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:4001/user/signup', {
//         fullname: fullName,
//         email,
//         password,
//       });

//       console.log('Signed up successfully!', response.data);
//       setSuccessMessage('Sign up successful!'); // Set success message
//       setError('');
//       navigate('/courses'); // Redirect to courses page
//     } catch (error) {
//       if (error.response && error.response.data) {
//         setError(error.response.data.message);
//       } else {
//         setError('An error occurred during sign-up');
//       }
//     }
//   };

//   const handleSignIn = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior

//     // Simple validation
//     if (!email || !password) {
//       setError('Please enter your email and password');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:4001/user/login', {
//         email,
//         password,
//       });

//       console.log('Signed in successfully!', response.data);
//       setSuccessMessage('Sign in successful!'); // Set success message
//       setError('');
//       navigate('/courses'); // Redirect to courses page
//     } catch (error) {
//       if (error.response && error.response.data) {
//         setError(error.response.data.message);
//       } else {
//         setError('An error occurred during sign-in');
//       }
//     }
//   };

//   const handleGoogleSuccess = (response) => {
//     console.log('Google login successful:', response);
//     // Handle the successful Google login here, e.g., send token to backend for verification
//     setSuccessMessage('Google login successful!'); // Set success message
//     setError('');
//     navigate('/courses'); // Redirect to courses page
//   };

//   const handleGoogleFailure = (error) => {
//     console.error('Google login failed:', error);
//     setError('Failed to sign in with Google');
//   };

//   return (
//     <div className='sign-in-container'>
//       <h2>{isSigningUp ? 'Sign Up' : 'Sign In'}</h2>
      
//       {/* Toggle between Sign Up and Sign In */}
//       <button onClick={() => setIsSigningUp(!isSigningUp)}>
//         {isSigningUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
//       </button>

//       {/* Form for signing up or signing in */}
//       <form className="sign-in-form" onSubmit={isSigningUp ? handleSignUp : handleSignIn}>
//         {isSigningUp && (
//           <>
//             <label htmlFor="fullName">Full Name:</label>
//             <input
//               id="fullName"
//               type="text"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               placeholder="Enter your full name"
//             />
//           </>
//         )}
        
//         <label htmlFor="email">Email:</label>
//         <input
//           id="email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           id="password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter your password"
//         />

//         <button type="submit">
//           {isSigningUp ? 'Sign Up' : 'Sign In'}
//         </button>
//       </form>

//       <GoogleLogin
//         clientId="YOUR_GOOGLE_CLIENT_ID" // Replace with your actual Google Client ID
//         onSuccess={handleGoogleSuccess}
//         onFailure={handleGoogleFailure}
//         scope="profile email"
//         buttonText="Sign in with Google"
//       />

//       {error && <p className='error-message'>{error}</p>}
//       {successMessage && <p className='success-message'>{successMessage}</p>} {/* Display success message */}
//     </div>
//   );
// };

// export default SignIn;


import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signing.css';

const SignIn = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4001';
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || 'your_google_client_id_here';

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      setError('Please enter your full name, email, and password');
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/user/signup`, {
        fullname: fullName,
        email,
        password,
      });

      console.log('Signed up successfully!', response.data);
      setSuccessMessage('Sign up successful!');
      setError('');
      navigate('/courses');
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred during sign-up');
      }
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter your email and password');
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/user/login`, {
        email,
        password,
      });

      console.log('Signed in successfully!', response.data);
      setSuccessMessage('Sign in successful!');
      setError('');
      navigate('/courses');
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred during sign-in');
      }
    }
  };

  const handleGoogleSuccess = (response) => {
    console.log('Google login successful:', response);
    setSuccessMessage('Google login successful!');
    setError('');
    navigate('/courses');
  };

  const handleGoogleFailure = (error) => {
    console.error('Google login failed:', error);
    setError('Failed to sign in with Google');
  };

  return (
    <div className="sign-in-container">
      <h2>{isSigningUp ? 'Sign Up' : 'Sign In'}</h2>
      
      <button onClick={() => setIsSigningUp(!isSigningUp)}>
        {isSigningUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
      </button>

      <form className="sign-in-form" onSubmit={isSigningUp ? handleSignUp : handleSignIn}>
        {isSigningUp && (
          <>
            <label htmlFor="fullName">Full Name:</label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
            />
          </>
        )}
        
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <button type="submit">
          {isSigningUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>

      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        onSuccess={handleGoogleSuccess}
        onFailure={handleGoogleFailure}
        scope="profile email"
        buttonText="Sign in with Google"
      />

      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default SignIn;
