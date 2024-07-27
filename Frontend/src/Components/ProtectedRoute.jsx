// ProtectedRoute.js
import React from 'react';
import { Route, Navigate,Outlet } from 'react-router-dom';
import { isAuthenticated } from '../utils/utils';
const ProtectedRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
  };
export default ProtectedRoute;
