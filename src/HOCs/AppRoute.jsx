import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const RouteComponent = ({ isAuth, Component, redirectPath, isAdmin }) => {
    const { infoUser } = useSelector((state) => state.reducer);
    const token = localStorage.getItem('USER_TOKEN');
 
    if (isAdmin) return token ? <Component /> : <Navigate to={redirectPath} />


    return (
        <Component />
    );
};

export default RouteComponent;