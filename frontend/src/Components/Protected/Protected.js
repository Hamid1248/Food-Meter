import React from "react";
import { Navigate } from "react-router-dom";
export const  Protected=({isAuth, children})=>{
    if (isAuth){
        return children;
    }
    else{
       return <Navigate to='/login'/>
    }
};
