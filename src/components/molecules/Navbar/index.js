import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-5">
      <div className="container-fluid">
        <Link className="navbar-brand text-primary fs-2 fw-medium" to="#">
          eleks
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="mx-0 my-5 mx-lg-4 my-lg-0" to="#">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="mx-0 my-5 mx-lg-4 my-lg-0" to="#">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="mx-0 my-5 mx-lg-4 my-lg-0" to="#">
                Industries & Expertise
              </Link>
            </li>
            <li className="nav-item">
              <Link className="mx-0 my-5 mx-lg-4 my-lg-0" to="#">
                Case Studies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="mx-0 my-5 mx-lg-4 my-lg-0" to="#">
                Blog
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center d-none d-lg-flex">
            <Link
              className="mx-3 btn btn-light rounded-pill border-fade-black-1 px-4 py-2"
              to="#"
            >
              Contact Us
            </Link>
            <i className="mx-3 fas fa-search"></i>
            <p className="mx-3 mb-0">EN</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default index;
