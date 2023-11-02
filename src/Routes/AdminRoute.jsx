import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const location=useLocation()
    //console.log(location);

    const {user,loading}=useContext(AuthContext)
    const [isAdmin,isAdminLoading]=useAdmin()
    // let checkAdmin;
    // if(isAdmin){
    //     console.log("is Admin from Admin Route:-------- ",isAdmin);
    // }

    if(loading || isAdminLoading){
        return <div>
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
        </div>
    }

    if(user && isAdmin?.admin){
        return children
    }
    return <Navigate  to={'/'} state={{from:location}} replace></Navigate>
};

export default AdminRoute;