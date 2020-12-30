import React from "react";

import './HomeBox.scss'

const HomeBox = (props) => {
  return (
    <div className="HomeBox flex justify-center items-center w100 h100">
      <div className="relative h100">
        <div className="HomeBox__svg flex justify-center items-center w100 h100">
          {props.icon}
        </div>
        <div className="HomeBox__overlay bg-white flex justify-center items-center absolute l0 t0 r0 b0 w100 h100">
          <h3 className='HomeBox__header w100 text-center body-serif absolute m0'>{props.header}</h3>
        </div>
      </div>
    </div>
  )
}

export default HomeBox;
