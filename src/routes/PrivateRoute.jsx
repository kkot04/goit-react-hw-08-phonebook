import React from "react";
import { selectIsLoggedIn } from "store/auth/selector";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


export const PrivateRoute = ({children}) => {
 const isLoggedIn = useSelector(selectIsLoggedIn)
 const location = useLocation()

 if(isLoggedIn){
    return children;
 }

 return <Navigate state={{ from: location }} to="/login" />;

}
