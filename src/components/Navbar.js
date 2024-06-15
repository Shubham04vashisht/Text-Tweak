import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {

  return (
    <div>
      <nav className = {`navbar navbar-expand-lg bg-${props.mode} text-white`} >
        <div className="container-fluid">
          <a className="navbar-brand text-light fs-4 fw-bolder " href="/" >
            {props.title}
          </a>
          <div id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <div className="form-check form-switch">
                <input
                  className="form-check-input text-light"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.click}
                />
                <label
                  className="form-check-label text-light"
                  htmlFor="flexSwitchCheckDefault"
                >
                  {props.txt}
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
};
// Navbar.defaultProps = { title: "enter title", about: "write about textUtils" }; 