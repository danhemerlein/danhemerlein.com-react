import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import styled from 'styled-components'

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

  const isDesktopUp = useMediaQuery({
    query: breakpoints.desktop,
  });

  let pageStyle = {
    height: isDesktopUp ? `${height}px` : "auto",
  };

  // notes on why this is happening please
  // auto height for small and medium screen sizes
  // subtract 64 px for some reason

  let innerStyle = {
    height: isDesktopUp ? `${height - 64}px` : "auto",
  }

  if (aboutPageLoading === false && !aboutPage.length) {
    return null;
  } else if (aboutPageLoading === true && !aboutPage.length) {
    return <div className="p2">loading...</div>;
  } else {

    const bgImage = aboutPage[0];

    const ImageStyle = styled.div`
      width: 100%;
      height: 100%;
      background-image: url(${bgImage.fields.heroImage.fields.file.url});
      background-color: #8C8582;
      background-size: cover;
      overflow: hidden;

      @media (min-width: 720px) {
        background-position: 50% 50%;
      }
      @media (min-width: 1024px) {
        background-position: 50% 85%;
      }
    `
    return (
      <div
        className="About pt2 flex flex-col body-serif"
        style={pageStyle}
      >
        <div
          className="flex items-center justify-center col-12 flex-wrap"
          style={innerStyle}
        >
          <div className="About__img-container flex col-12 lg:col-6">
            <ImageStyle></ImageStyle>
          </div>

          <div className="col-12 lg:col-6 flex justify-center">
            <div className="About__text">
              <p className="About__paragraph">hey I'm Dan (he/him),</p>

              <p className="About__paragraph mt_5">
                I'm a front-end web engineer and music producer based in Brooklyn, New York.
              </p>

              <p className="About__paragraph mt_5">
                As a coder, I'm really into JavaScript, e-commerce, CSS, accessibility, developer experience and learning something new everyday. I find a lot of joy in the process of achieving a technical goal.
              </p>

              <p className="About__paragraph mt_5">
                It’s been a weird time for my relationship with music but pre-Covid you could find me playing shows with indie-rock bands all over Manhattan and Brooklyn. These days, I mostly write and produce songs on my own out of my home studio. I’m planning to release a few tracks from a side project I’m currently manifesting in winter 2021.
              </p>

              <p className="About__paragraph mt_5">
                In my non-code/non-music time, I journal, moodboard, jog and aimlessly ride my bike around Brooklyn.
              </p>

              <p className="About__paragraph mt_5">
                I write code and make music because I can't not and it's super trill.
              </p>

            </div>
          </div>
        </div>
        {/* <div className="About__go-home-container py2 flex justify-center col-12">
          <GoHomeBack destination="/" cta="go home" white={false} />
        </div> */}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    aboutPageLoading:     state.aboutPage.loading,
    aboutPage:            state.aboutPage.content,
  }
}

export default connect(mapStateToProps)(AboutPage);
