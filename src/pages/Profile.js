import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Profileimg from '../assets/OIP.jpg';
import { auth } from "../firebase";
function Profile(){
    const email = window.localStorage.getItem("user");
    const navigate = useNavigate();
    const handleLogout = () => {
        window.localStorage.clear();
        navigate("/")
        auth.signOut();    };
   
    return(
        <Container
        className="shadow p-4 mt-5 bg-white rounded"
        style={{width : "500px"}}
        >
            <div
            className="text-center"
            ><h3>Profile</h3>
                <div 
                className="text-center mt-3">
                    <img src= {Profileimg} alt = "profileImg" width ={200}/>
                </div>
                <div className="d-flex justify-content-center">
                    <b>Email: </b>
                    <p>{email}</p>
                </div>
            </div>
                <div className="mt-3">
                    <button className="btn btn-primary w-100"
                onClick={() => handleLogout()}>
                
                    Sign out
                    </button>
                </div>
           
        </Container>
    );
}
export default Profile;