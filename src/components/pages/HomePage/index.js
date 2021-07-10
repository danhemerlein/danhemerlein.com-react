import FullScreenHeight from "components/other/FullScreenHeight";
import Loading from "components/other/Loading";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexContainer, H2, P } from "styles/elements";
import { above } from "styles/utilities";
import { remHelper } from "utils";
import { getAboutPageContent } from "../../../store/actions/aboutPage";

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

  const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    flex-wrap: wrap;
    flex-direction: row;
    ${above.desktop`
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
      padding-right: ${remHelper[8]};
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
      ${({ index }) => index === 1 && `width: 100%;`};

    `}

    ${above.desktop`
      width: 352px;
    `}
  `;

  const TextContainer = styled(FlexContainer)`
    width: 100%;
    margin-top: ${remHelper[16]};

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
      padding-left: ${remHelper[8]};
    `}
  `;

  const StyledP = styled(P)`
    ${({ index }) => index > 0 && `margin: ${remHelper[8]} 0;`};
  `;

  const StyledLink = styled(Link)`
    font-size: 1.4rem;
  `;

  const HomeBox = styled.div`
    border: 1px solid;
    border-color: ${({ theme }) => theme.light.black};
    padding: ${remHelper[16]};

    width: 50%;
    height: 50%;
  `;

  return (
    <FullScreenHeight>
      <ContentContainer>
        {/* <ImageContainer items="center">
          <BackgroundImage imageSRC={source}>
            <BackgroundImage imageSRC={sourcePrime} index={1} />
          </BackgroundImage>
        </ImageContainer>

        <TextContainer justify="center" items="flex-start" direction="column">
          <TextContainerInner>
            <StyledP index={0}>hey i'm dan (he/him),</StyledP>

            <StyledP index={1}>
              i write <StyledLink to="/code">code</StyledLink>, make&nbsp;
              <StyledLink to="/music">music</StyledLink> and sometimes
              take&nbsp;
              <StyledLink to="/moodboard">photos</StyledLink>
            </StyledP>

            <StyledP index={2}>
              you can read more about me&nbsp;
              <StyledLink to="/about">here.</StyledLink>
            </StyledP>
          </TextContainerInner>
        </TextContainer> */}
        <HomeBox>
          <H2>code</H2>
        </HomeBox>
        <HomeBox>
          <H2>music</H2>
        </HomeBox>
        <HomeBox>
          <H2>moodboard</H2>
        </HomeBox>
        <HomeBox>
          <H2>more</H2>
        </HomeBox>
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
