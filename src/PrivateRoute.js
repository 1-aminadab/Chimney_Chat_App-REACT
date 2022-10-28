import React, {useContext} from 'react';
import {Route, Navigate} from "react-router-dom"
import { AuthContext } from './context/AuthContext';

const PrivateRoute = ({component: RouteComponent, ...rest}) =>{
    const {currentUser} = useContext(AuthContext);
    return (
        <Route
         {...rest}
         render={routeProps =>
        !!currentUser ? (
            <RouteComponent {...routeProps} />
        ) :(
           < Navigate to={"/login"} />
            )
    }
        />
    )
}

export default PrivateRoute