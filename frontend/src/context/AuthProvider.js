
import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialAuthUser = JSON.parse(localStorage.getItem('authUser')) || null;
  const [authUser, setAuthUser] = useState(initialAuthUser);

  useEffect(() => {
    localStorage.setItem('authUser', JSON.stringify(authUser));
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
