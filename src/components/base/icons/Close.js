import React from "react";

const CloseIcon = ({ clickHandler }) => {
  return (
    <svg
      onClick={clickHandler}
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 25 25"
      space="preserve"
    >
      <desc>Created by Sophia Bai from the Noun Project</desc>
      <g>
        <polygon points="18.010437,6.6966553 17.3032837,5.989563 12,11.2928467 6.6967163,5.989563 5.989563,6.6966553    11.2929077,11.999939 5.989563,17.3032837 6.6967163,18.010376 12,12.7070923 17.3032837,18.010376 18.010437,17.3032837    12.7071533,11.999939  " />
      </g>
    </svg>
  );
};

export default CloseIcon;
