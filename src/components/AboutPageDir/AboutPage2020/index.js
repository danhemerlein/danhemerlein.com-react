//react
import React, { useState, useEffect } from "react";

// components
import Image from "components/base/Image";
import GoHomeBack from "components/base/GoHomeBack";

// hooks
import useHeight from "hooks/useHeight";
import useBreakpoint from "hooks/useBreakpoint";

// styles
import "./AboutPage2020.scss";

const AboutPage = (props) => {

  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  let height = useHeight(header, footer);
  const point = useBreakpoint();

  let pageStyle, innerStyle = {
    height: point === "md" || point === "lg" || point === "xl" ? `${height - 16}px` : "auto",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: "url(" + props.image.fields.file.url + ")",
    backgroundColor: "#8C8582",
    backgroundPosition: "50% 85%",
    backgroundSize: "cover",
    overflow: "hidden",
  };

  return (
    <div
      className="AboutPage2020 my2 flex flex-column body-serif"
      style={pageStyle}
    >
      <div
        className="AboutPage2020__inner flex justify-center col-12"
        style={innerStyle}
      >
        <div className="AboutPage2020__img-container flex col-12-dh  md-col-6-dh">
          <div style={imageStyle} className=""></div>
        </div>

        <div className="col-12-dh md-col-6-dh flex items-center justify-center">
          <div className="AboutPage2020__text">
            <p className="body-serif">hey I'm Dan,</p>

            <p className="body-serif mt1">
              I'm a web engineer and music producer based in Brooklyn, New York.
            </p>

            <p className="body-serif mt1">
              music / coding is my life and it's super trill.
            </p>
          </div>
        </div>
      </div>
      <div className="AboutPage2020__go-home-container  mt2 flex justify-center col-12">
        <GoHomeBack destination="/" cta="go home" white={false} />
      </div>
    </div>
  );
};

export default AboutPage;

