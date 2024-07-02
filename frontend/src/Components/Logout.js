

import React from 'react';
import { useAuth } from '../context/AuthProvider';

const Logout = () => {
  const { logout } = useAuth(); // Use useAuth hook inside a React function component

  const handleLogout = () => {
    logout(); // Call logout function provided by AuthProvider
  };

  return (
    <div>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;

