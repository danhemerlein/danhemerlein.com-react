import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import GoHomeBack from "components/base/GoHomeBack";
import { getAboutPageContent } from "../../../store/actions/aboutPage";

import useHeight from "hooks/useHeight";

import { useMediaQuery } from 'react-responsive'
import breakpoints from "../../../utils/breakpoints";

import "./About.scss";

const AboutPage = (props) => {

  const { aboutPageLoading, aboutPage } = props;

  const dispatch = useDispatch();

  useEffect(() => {

    const loadContent = async () => {
      await dispatch(getAboutPageContent());
    }

    loadContent();

  }, [dispatch]);

  var header = document.querySelector("header");
  var footer = document.querySelector("footer");

  let height = useHeight(header, footer);

  const isTabletUp = useMediaQuery({
    query: breakpoints.tablet,
  });

  let pageStyle = {
    height: isTabletUp ? `${height}px` : "auto",
  };

  // notes on why this is happening please
  // auto height for small and medium screen sizes
  // subtract 64 px for some reason

  let innerStyle = {
    height: isTabletUp ? `${height - 64}px` : "auto",
  }

  if (aboutPageLoading === false && !aboutPage.length) {
    return null;
  } else if (aboutPageLoading === true && !aboutPage.length) {
    return <div className="p2">loading...</div>;
  } else {

    const bgImage = aboutPage[0];

    const imageStyle = {
      width: "100%",
      height: "100%",
      backgroundImage: "url(" + bgImage.fields.heroImage.fields.file.url + ")",
      backgroundColor: "#8C8582",
      backgroundPosition: "50% 85%",
      backgroundSize: "cover",
      overflow: "hidden",
    };

    return (
      <div
        className="About mt2 flex flex-column body-serif"
        style={pageStyle}
      >
        <div
          className="About__inner flex justify-center col-12"
          style={innerStyle}
        >
          <div className="About__img-container flex col-12-dh  md-col-6-dh">
            <div style={imageStyle} className=""></div>
          </div>

          <div className="col-12-dh md-col-6-dh flex items-center justify-center">
            <div className="About__text">
              <p className="About__paragraph">hey I'm Dan,</p>

              <p className="About__paragraph mt1">
                I'm a web engineer and music producer based in Brooklyn, New York.
              </p>

              <p className="About__paragraph mt1">
                music / coding is my life and it's super trill.
              </p>
            </div>
          </div>
        </div>
        <div className="About__go-home-container py2 flex justify-center col-12">
          <GoHomeBack destination="/" cta="go home" white={false} />
        </div>
      </div>
    )
  }
};

// export default AboutPage;

const mapStateToProps = (state) => {
  return {
    aboutPageLoading:     state.aboutPage.loading,
    aboutPage:            state.aboutPage.content,
  }
}

export default connect(mapStateToProps)(AboutPage);
