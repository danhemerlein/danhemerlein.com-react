import cx from "classnames";
import React from "react";
import "./NavOverlay.scss";

const MobileNavOverlay = ({ navOpen, clickHandler }) => {
  return (
    <div
      className={cx(
        "NavOverlay",
        {
          "NavOverlay--active": navOpen === true,
        },
        {
          NavOverlay: navOpen === false,
        }
      )}
      onClick={clickHandler}
    />
  );
};

export default MobileNavOverlay;
