import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import Main from "../pages/Main";
// import styles from "./UserForm.module.css";
// IMPORT REACT-BOOTSTRAP BUTTON
import Button from "react-bootstrap/Button";

// IMPORT REACT-BOOTSTRAP FORM
import Form from "react-bootstrap/Form";

const UserForm = ({ title, buttonText, submit }) => {
  const [signupPrompt, setSignupPrompt] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Form>
        <h5 style={{ paddingTop: "9px" }}>{title}</h5>

        <input
          className="input-fields"
          type="text"
          value={username}
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="input-fields"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <Button
          className="margin-userform"
          variant="primary"
          size="sm"
          onClick={(e) => {
            e.preventDefault();
            submit(password, username);
          }}
        >
          {buttonText}
        </Button>

        {signupPrompt && (
          <div>
            <h4 style={{ color: "red" }}>Invalid Login</h4>
            <p>
              Need to sign up?{" "}
              <Link to="/signup">
                <Button variant="primary">Signup here</Button>
              </Link>
            </p>
          </div>
        )}
      </Form>
    </div>
  );
};

export default UserForm;
