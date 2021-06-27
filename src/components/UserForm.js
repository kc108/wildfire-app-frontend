import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import Main from "../pages/Main";
// import styles from "./UserForm.module.css";
// IMPORT REACT-BOOTSTRAP BUTTON
// import Button from "react-bootstrap/Button";

// IMPORT REACT-BOOTSTRAP FORM
import Form from "react-bootstrap/Form";

const UserForm = ({ title, buttonText, submit }) => {
  const [signupPrompt, setSignupPrompt] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="userform-center">
        <div className="center-login-img">
          <img
            src="https://theplantedrunner.com/wp-content/uploads/2017/08/tree-in-wind.jpg"
            width="80"
            height="500"
          />

          <h5 className="login-title" style={{ paddingTop: "9px" }}>
            Wind Event
          </h5>
        </div>

        <Form>
          <hr />
          <div className="container-signup-login">
            <div className="user-inputs">
              <input
                className="input-fields input is-small is-focused user-inputs"
                type="text"
                value={username}
                placeholder="Username"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>

            <input
              className="input-fields input is-small is-focused user-inputs"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <button
              className=" button is-block is-small is-link is-hovered margin-userform login-signup-btn"
              variant="primary"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                submit(password, username);
              }}
            >
              {buttonText}
            </button>
            {/* {signupPrompt && (
            <div>
              <h4 style={{ color: "red" }}>Invalid Login</h4>
              <p>
                Need to sign up?{" "}
                <Link to="/signup">
                  <button variant="primary">Signup here</button>
                </Link>
              </p>
            </div>
          )} */}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
