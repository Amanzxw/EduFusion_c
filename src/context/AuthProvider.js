

// // import React, { createContext, useContext, useState } from 'react';

// // // Create and export the AuthContext
// // export const AuthContext = createContext();

// // export default function AuthProvider({ children }) {
// //     // Retrieve initial authUser from localStorage
// //     const initialAuthUser = localStorage.getItem("Users");

// //     // Use useState to manage authUser state
// //     const [authUser, setAuthUser] = useState(
// //         initialAuthUser ? JSON.parse(initialAuthUser) : undefined
// //     );

// //     return (
// //         <AuthContext.Provider value={{ authUser, setAuthUser }}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // }

// // // Custom hook to use the AuthContext
// // export const useAuth = () => useContext(AuthContext);
// import React, { createContext, useContext, useState, useEffect } from 'react';

// // Create and export the AuthContext
// export const AuthContext = createContext();

// export default function AuthProvider({ children }) {
//     // Retrieve initial authUser from localStorage
//     const initialAuthUser = localStorage.getItem("Users");

//     // Use useState to manage authUser state
//     const [authUser, setAuthUser] = useState(
//         initialAuthUser ? JSON.parse(initialAuthUser) : null // Set to null instead of undefined initially
//     );

//     useEffect(() => {
//         // Update localStorage when authUser changes
//         localStorage.setItem("Users", JSON.stringify(authUser));
//     }, [authUser]);

//     return (
//         <AuthContext.Provider value={{ authUser, setAuthUser }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// // Custom hook to use the AuthContext
// export const useAuth = () => useContext(AuthContext);

// AuthProvider.js
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
