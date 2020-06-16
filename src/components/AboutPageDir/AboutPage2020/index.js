//react
import React from "react";

// components
import GoHomeBack from "components/base/GoHomeBack";

// hooks
import useHeight from "hooks/useHeight";
import useBreakpoint from "hooks/useBreakpoint";

// styles
import "./AboutPage2020.scss";

const AboutPage = (props) => {

  var header = document.querySelector("header");
  var footer = document.querySelector("footer");

  let height = useHeight(header, footer);
  let point = useBreakpoint();

  let pageStyle = {
    height: point === "lg" || point === "xl" ? `${height}px` : "auto",
  };

  // notes on why this is happening please

  let innerStyle = {
    height: point === "lg" || point === "xl" ? `${height - 64}px` : "auto",
  }

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
      className="AboutPage2020 mt2 flex flex-column body-serif"
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
              I'm a web developer and music producer based in Brooklyn, New York.
            </p>

            <p className="body-serif mt1">
              music / coding is my life and it's super trill.
            </p>
          </div>
        </div>
      </div>
      <div className="AboutPage2020__go-home-container py2 flex justify-center col-12">
        <GoHomeBack destination="/" cta="go home" white={false} />
      </div>
    </div>
  );
};

export default AboutPage;

