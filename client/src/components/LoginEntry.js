import React from "react";
import LogIn from "./Login";
import SignUp from "./SignUp";

function LoginEntry({ onLogin }){

    return ( 
        <>
        <LogIn onLogin={onLogin} />
        <SignUp onLogin={onLogin}  />
        </>
    )
}
export default LoginEntry;