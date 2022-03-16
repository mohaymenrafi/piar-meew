import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

export default function PrivateRoute() {
  const [authToken] = useContext(authContext);
  return !!authToken ? <Outlet /> : <Navigate to="/login" />;
}
