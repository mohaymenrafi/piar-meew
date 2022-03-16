import React, { createContext, useState } from 'react';

export const authContext = createContext('');
/*eslint-disable*/
export default function AuthProvider({ children }) {
  const token = localStorage.getItem('user_jwt');
  const [authToken, setAuthToken] = useState(token);
  return (
    <authContext.Provider value={[authToken, setAuthToken]}>
      {children}
    </authContext.Provider>
  );
}
