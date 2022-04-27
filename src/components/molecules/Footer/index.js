import { Img2 } from "assets/source/image";
import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer className="my-3 py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-10 mb-5 mb-lg-0">
            <div className="wrapper">
              <p className="fs-5">
                Ready to see <br /> what we can do for you?
              </p>
              <p className="fs-1 fw-bold text-primary d-flex align-items-center">
                Contact Us
                <Link className="text-primary" to="#">
                  <i className="fas fa-chevron-circle-right ms-3"></i>
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-1 mb-5 mb-lg-0">
            <div className="wrapper">
              <div className="d-flex align-items-center">
                <figure className="m-0">
                  <img
                    className="rounded-circle wh-profile me-4"
                    src={Img2}
                    alt="image-2"
                  />
                </figure>
                <div className="text fw-bold fs-5">
                  <p className="mb-0">Romain Desigau</p>
                  <p className="mb-0">Head of IT, IXM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
