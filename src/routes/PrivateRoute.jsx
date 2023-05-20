import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <progress className="progress w-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></progress>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;