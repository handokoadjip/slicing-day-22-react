import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const index = (props) => {
  const className = [
    "me-2",
    "btn",
    "btn-light",
    "rounded-pill",
    "border-fade-black-1",
    "px-4",
    "py-2",
    "mb-2",
    "text-fade-black-1",
  ];

  className.push(props.className);

  return (
    <Link className={className.join(" ")} to={props.href}>
      {props.children}
    </Link>
  );
};

index.propTypes = {
  className: propTypes.string,
  href: propTypes.string,
};

export default index;
