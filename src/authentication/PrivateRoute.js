import React from 'react';
import { Navigate} from 'react-router-dom';
import { useUser } from './useUser';

export const PrivateRoute = ({ children}) => {
   const user = useUser();
      
  if (user ) {
    return children
  }
  return <Navigate to="/signin" />
};