// import React from 'react';
// import { useAuth } from '../context/AuthProvider';

// const logout = () => {
//   const { logout } = useAuth(); // Assuming useAuth provides a logout function

//   const handleLogout = () => {
//     logout(); // Call logout function provided by AuthProvider
//   };

//   return (
//     <div>
//       <button
//         style={{
//           backgroundColor: 'red',
//           color: 'white',
//           border: 'none',
//           padding: '10px 20px',
//           textAlign: 'center',
//           textDecoration: 'none',
//           display: 'inline-block',
//           fontSize: '16px',
//           margin: '4px 2px',
//           cursor: 'pointer',
//           borderRadius: '4px',
//         }}
//         onClick={handleLogout}
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default logout;

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

