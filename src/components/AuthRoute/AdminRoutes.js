import React from "react";

const AdminRoutes = ({children})=>{
    // get token from localstroage
    const user = JSON.parse(localStorage.getItem("userInfo"))
    const isAdmin = user?.userExists?.isAdmin ? true : false;
    if(!isAdmin) return <h1>Access Denied ! Admin Access Only</h1>;
    return <>{children}</>
}

export default AdminRoutes;