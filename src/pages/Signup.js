import React, { useState } from 'react';
import { Link } from "react-router-dom";
// IMPORT COMPONENTS
import UserForm from "../components/UserForm";
// import Header from "../components/Header"


const Signup = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const URL = "localhost:3000/users"

const handleSubmit = (password, username) => {

    console.log(URL)

    fetch(URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password}),
    })
        .then((res) => {
            alert("User is created")
            props.history.push("/login");
        })
        }
    
    return (
        <div>
            
            <UserForm 
                submit={handleSubmit}
                title="Signup. It's quick and easy"
                buttonText="Signup"
            />
            <p style={{textAlign: "center"}}>Already a Member? <Link to="/login">Login here</Link></p>
        </div>
    )
}

export default Signup;
