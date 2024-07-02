



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import AppWrapper from './App';
// import reportWebVitals from './reportWebVitals';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import AuthProvider from './context/AuthProvider';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AuthProvider>
//       <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
//         <AppWrapper />
//       </GoogleOAuthProvider>
//     </AuthProvider>
//   </React.StrictMode>
// );

// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWrapper from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthProvider from './context/AuthProvider';

const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your actual Google OAuth client ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <AppWrapper />
      </GoogleOAuthProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
