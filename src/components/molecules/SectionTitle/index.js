import { Logo } from "assets/source/image";
import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section className="mb-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 justify-content-center mt-4">
            <div className="wrapper text-center mb-3">
              <Link to="#">
                <i className="fas fa-chevron-left border rounded-circle p-3 wh-icon"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="wrapper mb-3">
              <h1 className="text-navbar pb-4 fw-medium display-5">
                Seamless Migration of SAP Business Objects Platform for a Global
                Metals Trading Enterprise
              </h1>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="wrapper mb-3 text-center">
              <figure>
                <img className="w-100" src={Logo} alt="Logo" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
