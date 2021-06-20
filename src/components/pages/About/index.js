import FullScreenHeight from "components/other/FullScreenHeight";
import Loading from "components/other/Loading";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { getAboutPageContent } from "../../../store/actions/aboutPage";
import { above } from "../../../styles/utilities";
import { spacing } from "../../../utils";

const AboutPage = ({ aboutPageLoading, aboutPage }) => {
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

  const ImageContainer = styled(FlexContainer)`
    width: 100%;
    justify-content: center;

    ${above.tablet`
      width: 100%;
    `}

    ${above.desktop`
      justify-content: flex-end;
      width: 50%;
      padding-right: ${spacing[0.5]};
    `}
  `;

  const BackgroundImage = styled.div`
    width: 100%;
    height: 420px;
    background-position: center;
    background-size: cover;
    transition: opacity 0.25s ease-in-out;

    ${({ imageSRC }) => `background-image: url(${imageSRC});`};
    ${({ index }) => index === 1 && `opacity: 0;`};

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
      max-width: 75%;
      padding-left: ${spacing[0.5]};
    `}
  `;

  const StyledParagraph = styled.p`
    ${"" /* line-height: 1.4; */}
    ${({ index }) => index > 0 && `margin: ${spacing[0.5]} 0;`};
  `;

  return (
    <FullScreenHeight unsetBreakpoint="desktop">
      <ContentContainer>
        <ImageContainer items="center">
          <BackgroundImage imageSRC={source}>
            <BackgroundImage imageSRC={sourcePrime} index={1} />
          </BackgroundImage>
        </ImageContainer>

        <TextContainer justify="center" items="flex-start" direction="column">
          <TextContainerInner>
            <StyledParagraph index={0}>
              &emsp;hey I'm dan (he/him),
            </StyledParagraph>

            <StyledParagraph index={1}>
              &emsp;I'm a front-end web engineer and music producer based in
              Brooklyn, New York.
            </StyledParagraph>

            <StyledParagraph index={2}>
              &emsp;As a coder, I'm really into JavaScript, e-commerce, CSS,
              accessibility, developer experience and learning something new
              every day. I find a lot of joy in the process of achieving a
              technical goal.
            </StyledParagraph>

            <StyledParagraph index={3}>
              &emsp;Back before the pandemic you could find me playing shows
              with indie-rock bands all over Manhattan and Brooklyn. These days,
              I mostly write and produce songs on my own out of my home studio.
              I’m planning to release a few tracks from a side project I’m
              currently manifesting in spring 2021.
            </StyledParagraph>

            <StyledParagraph index={4}>
              &emsp;In my non-code/non-music time, I journal, read,&nbsp;
              <Link to="/blog">
                <span className="underline">blog?</span>
              </Link>
              &nbsp;moodboard, jog in McCarren Park and aimlessly ride my bike
              around the city.
            </StyledParagraph>

            <StyledParagraph index={5}>
              &emsp;I write code and make music because I can't not and it's
              super trill.
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

export default connect(mapStateToProps)(AboutPage);
