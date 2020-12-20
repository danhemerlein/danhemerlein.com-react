import React from "react";
import { Link } from "react-router-dom";

import cx from "classnames";

import "./GoHomeBack.scss";

const GoHomeBack = (props) => {
  return (
    <div
        className={cx("GoHomeBack", {
          "GoHomeBack__white ": props.white
        })}
      >
      <Link to={props.destination}>
        <span className="body-serif">{props.cta}</span>
      </Link>
    </div>
  )
}

export default GoHomeBack;
