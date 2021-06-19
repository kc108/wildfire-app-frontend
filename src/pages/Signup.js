import React, { useState } from "react";
import { Link } from "react-router-dom";
// IMPORT COMPONENTS
import UserForm from "../components/UserForm";
// import Header from "../components/Header"

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const URL = "http://localhost:3000/users";

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
      });
  };

  return (
    <div>
      <UserForm
        submit={handleSubmit}
        title="Signup. It's quick and easy"
        buttonText="Signup"
      />
      <p style={{ textAlign: "center" }}>
        Already a Member? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Signup;
