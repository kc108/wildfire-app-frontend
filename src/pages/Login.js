import React, { useState } from "react";
import { Link } from "react-router-dom";
// IMPORT COMPONENTS
import UserForm from "../components/UserForm";
// import Header from "../components/Header"

const Login = (props) => {
  const URL = "http://localhost:3000/sessions";

  const handleSubmit = (password, username) => {
    const data = {
      user: {
        username: username,
        password: password,
      },
    };

    fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        // "token" storing token - can call it anything
        localStorage.setItem("token", json.jwt_token);
        // props.history.push("/searches");
        window.location = "/searches";
      });
  };

  return (
    <div>
      <UserForm submit={handleSubmit} title="Login" buttonText="Login" />
      <p style={{ textAlign: "center" }}>
        Not a Member? <Link to="/signup">Signup here</Link>
      </p>
    </div>
  );
};

export default Login;
