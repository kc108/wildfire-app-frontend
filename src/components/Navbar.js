import React from "react";

export default function Navbar() {
  const [isActive, setisActive] = React.useState(false);

  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/searches">
          <img
            src="https://theplantedrunner.com/wp-content/uploads/2017/08/tree-in-wind.jpg"
            width="80"
            height="500"
          />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Fire Resources</a>

            <div class="navbar-dropdown">
              <a href="https://www2.purpleair.com/" class="navbar-item">
                Air Quality
              </a>
              <a
                href="http://www.alertwildfire.org/northbay/"
                class="navbar-item"
              >
                Fire Cameras
              </a>
              <a href="https://twitter.com/CAFireScanner" class="navbar-item">
                Fire Reporting Feed
              </a>
            </div>
          </div>
        </div>

        {/* <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">Log in</a>
            </div>
          </div>
        </div> */}
      </div>
    </nav>
  );
}
