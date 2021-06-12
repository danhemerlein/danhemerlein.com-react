import cx from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import "./GoHomeBack.scss";

const GoHomeBack = ({ white, destination, cta }) => {
  return (
    <div
      className={cx("GoHomeBack", {
        "GoHomeBack__white ": white,
      })}
    >
      <Link to={destination}>
        <span>{cta}</span>
      </Link>
    </div>
  );
};

export default GoHomeBack;
