import FullScreenHeight from "components/other/FullScreenHeight";
import Loading from "components/other/Loading";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getAboutPageContent } from "store/actions/aboutPage";
import styled from "styled-components";
import { FlexContainer, H2 } from "styles/elements";
import { above } from "styles/utilities";
import HomePageBanner from "./HomePageBanner";
import HomePageLink from "./HomePageLink";
import Info from "./Info";

const NewHomePage = ({ aboutPageLoading, aboutPage }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadContent = async () => {
      await dispatch(getAboutPageContent());
    };

    loadContent();
  }, [dispatch]);

  if (aboutPageLoading === false && !aboutPage.length) {
    return null;
  }
  if (aboutPageLoading === true && !aboutPage.length) {
    return <Loading />;
  }

  const aboutPageContent = aboutPage[0];
  const source = `https:${aboutPageContent.fields.heroImage.fields.file.url}`;
  const sourcePrime = `https:${aboutPageContent.fields.heroImagePrime.fields.file.url}`;

  const HomeContainer = styled(FlexContainer)`
    position: relative;
  `;

  const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    ${above.desktop`
      flex-wrap: wrap;
      flex-direction: row;
    `}
  `;

  return (
    <FullScreenHeight unsetBreakpoint="desktop">
      <HomeContainer direction="column" height="100%" width="100%">
        <HomePageBanner desktop />

        <BoxContainer>
          <Info source={source} sourcePrime={sourcePrime} />

          <HomePageLink destination="/code" position="top-left">
            <H2>code</H2>
          </HomePageLink>
          <HomePageLink destination="/music" position="top-right">
            <H2>music</H2>
          </HomePageLink>

          <HomePageBanner mobile />


          <HomePageLink destination="/moodboard" position="bottom-left">
            <H2>mood</H2>
          </HomePageLink>
          <HomePageLink destination="/about" position="bottom-right">
            <H2>more</H2>
          </HomePageLink>
        </BoxContainer>
      </HomeContainer>
    </FullScreenHeight>
  );
};

const mapStateToProps = (state) => {
  return {
    aboutPageLoading: state.aboutPage.loading,
    aboutPage: state.aboutPage.content,
  };
};

export default connect(mapStateToProps)(NewHomePage);
