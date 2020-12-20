import React from "react";

import cx from "classnames";
import "./NavOverlay.scss";

const MobileNavOverlay = (props) => {
  return (
    <div
      className={cx(
        "NavOverlay",
        {
          "NavOverlay--active": props.navOpen === true,
        },
        {
          NavOverlay: props.navOpen === false,
        }
      )}
      onClick={props.clickHandler}
    ></div>
  );
}

export default MobileNavOverlay;
