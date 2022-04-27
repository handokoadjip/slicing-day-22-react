import { Img1 } from "assets/source/image";
import React from "react";

const index = () => {
  return (
    <section className="mb-5 pt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 p-0">
            <div className="wrapper">
              <figure>
                <img className="w-100 h-image-90vh" src={Img1} alt="image-1" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
