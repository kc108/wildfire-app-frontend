import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Main = (props) => {
    return (
        <div className="main-comps">
            <div className="main-contents">
                <img className="main-image" src="" alt="" />
                <Link to="/login"><Button className="button-format" variant="primary" size="sm">Login</Button></Link>
                <h5>
                <Link to="/signup"><Button className="button-format" variant="success" size="sm">Create New User</Button></Link></h5>
                
            </div>
        </div>
    )
}

export default Main;
