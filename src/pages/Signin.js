import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
function Signin(props){
    const Navigate = useNavigate();
 return(
    
        
        <><h2>Sign in</h2><div>
         <p>Username</p>
         <input 
            className="form-control w-100" 
            type="text" placeholder="demo@gmail.com" 
            value={props.email}
            autoFocus 
            onChange={(e) => props.handleEmail(e)}
            required />
     </div>
     <div>
             <p>Password</p>
             <input 
                className="form-control" 
                type="password" 
                placeholder="123456" 
                value={props.password}
                onChange={(e) => props.handlePassword(e)}
                required />
         </div>
         <div>
             <button 
                className="btn btn-primary mt-2 w-100"
                onClick={() => props.handleSignin()}
                >
                Sign in
                </button>
             <div 
                className="d-flex align-items-center justify-content-center"
                >
                 <p className="text-center mt-3 mr-1">Don't Have an account?  </p>
                 &nbsp; <button
                    type="button"
                    className="btn btn-link px-0"
                    onClick={() => props.setHasAccount(!props.hasAccount)}
                 >
                     Sign up
                 </button>
             </div>
         </div></>

 );
}
export default Signin;