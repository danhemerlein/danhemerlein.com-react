import FullScreenHeight from "components/other/FullScreenHeight";
import Loading from "components/other/Loading";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { getAboutPageContent } from "../../../store/actions/aboutPage";
import { toggleHomepage } from "../../../store/actions/siteSettings";
import { above } from "../../../styles/utilities";
import { spacing } from "../../../utils";

const NewHomePage = ({ aboutPageLoading, aboutPage }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    return dispatch(toggleHomepage());
  };

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

  const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${above.tablet`
      height: 75%;
    `}

    ${above.desktop`
      flex-direction: row;
    `}
  `;

  const TextContainer = styled(FlexContainer)`
    width: 100%;
    margin-top: ${spacing[1]};

    ${above.tablet`
      width: 75%;
      margin-left: auto;
      margin-right: auto;
    `}

    ${above.desktop`
      margin-top: 0;
      width: 50%;
    `}
  `;

  const TextContainerInner = styled.div`
    ${above.desktop`
      max-width: 50%;
    `}
  `;

  const ImageContainer = styled(FlexContainer)`
    width: 100%;
    margin: 0 auto;

    ${above.tablet`
      width: 100%;
    `}

    ${above.desktop`
      width: 50%;
    `}
  `;

  const BackgroundImage = styled.div`
    width: 100%;
    height: 420px;
    margin: 0 auto;
    ${({ imageSRC }) => `background-image: url(${imageSRC});`};
    ${({ index }) => index === 1 && `opacity: 0;`};
    background-position: center;
    background-size: cover;
    transition: opacity 0.5s ease-in-out;

    &:hover {
      ${({ index }) => index === 1 && `opacity: 1;`};
      ${({ index }) => index === 0 && `opacity: 0;`};
    }

    ${above.tablet`
      width: 50%;
    `}

    ${above.desktop`
      width: 352px;
    `}
  `;

  const StyledParagraph = styled.p`
    line-height: 1.69;

    ${above.desktop`
      max-width: %;
    `}

    ${({ index }) => index === 0 && `margin-bottom ${spacing[0.5]};`};
  `;

  const StyledLink = styled(Link)`
    ${"" /* ${anchorColor({
      color: "black",
    })}; */}
    font-size: 1.4rem;
  `;

  return (
    <FullScreenHeight unsetBreakpoint="desktop">
      <ContentContainer>
        <ImageContainer justify="center" items="center">
          <BackgroundImage imageSRC={source}>
            <BackgroundImage imageSRC={sourcePrime} index={1} />
          </BackgroundImage>
        </ImageContainer>

        <TextContainer justify="center" items="flex-start" direction="column">
          <TextContainerInner>
            <StyledParagraph index={0}>hey I'm Dan (he/him),</StyledParagraph>
            <StyledParagraph index={1}>
              I write <StyledLink to="/code">code</StyledLink>, make&nbsp;
              <StyledLink to="/music">music</StyledLink> and and occasionaly
              take &nbsp;
              <StyledLink to="/moodboard">film photos</StyledLink>
            </StyledParagraph>
            <StyledParagraph index={2}>
              you can read more <StyledLink to="/about">about</StyledLink> me
              here
            </StyledParagraph>
            <StyledParagraph index={3}>
              also, this a new version of my website homepage that I'm trying
              out. if you want see the old one click/tap{" "}
              <button type="button" onClick={clickHandler}>
                this
              </button>
              .
            </StyledParagraph>
          </TextContainerInner>
        </TextContainer>
      </ContentContainer>
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
