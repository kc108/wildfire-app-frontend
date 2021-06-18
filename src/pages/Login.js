// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import UserForm from "../components/UserForm";
// import Header from "../components/Header";

// // IMPORT FORM FROM BOOTSTRAP
// import Form from "react-bootstrap/Form";

// const Login = (props) => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const URL = "https://job-search-binder.herokuapp.com/user"

// const handleSubmit = (password, username) => {

//     console.log("hello")

//     fetch(URL, {
//         method: "post",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({username, password}),
//                     })
//         .then((res) => {
//             alert("User is signed in")
//             props.history.push("/profile");
//         })
//         }
    
//     return (
        
//         <div className="signup-container">
//             <Header />
//             <UserForm 
//                 submit={handleSubmit}
//                 title="Thanks for visiting"
//                 buttonText="Login"
//             />
//         </div>
//     )
// }

// export default Login;
