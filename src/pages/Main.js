import React from "react";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import Navbar from "../components/Navbar";

const Main = (props) => {
  return (
    <div className="hero is-fullheight main-comps">
      <div className="main-contents box">
        <img
          src="https://theplantedrunner.com/wp-content/uploads/2017/08/tree-in-wind.jpg"
          width="80"
          height="500"
        />

        <h1>Wind Event</h1>
        <img className="main-image" src="" alt="" />
        <div className="main-container">
          <hr className="navbar-divider" />
          <div className="button-color">
            <Link to="/login">
              <div className="center-btn-elem">
                <button className="button is-block is-small is-success is-hovered login-btn">
                  Login
                  <i class="fa fa-sign-in" aria-hidden="true"></i>
                </button>
              </div>
            </Link>
          </div>
          <h5>
            <Link to="/signup">
              <button className="button is-block is-small is-link signup-btn">
                Create New User
                <i class="fa fa-sign-in" aria-hidden="true"></i>
              </button>
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Main;
