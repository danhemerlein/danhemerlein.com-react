import FullScreenHeight from "components/other/FullScreenHeight";
import Loading from "components/other/Loading";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAboutPageContent } from "../../../store/actions/aboutPage";
import { above, anchorColor } from "../../../styles/utilities";
import { spacing } from "../../../utils";

const AboutPage = (props) => {
  const { aboutPageLoading, aboutPage } = props;

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

  const bgImage = aboutPage[0];

  const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    ${above.tablet`
      flex-direction: row;
    `}
  `;

  const ImageContainer = styled.div`
    width: 100%;
    display: flex;

    ${above.desktop`
      width: 50%;
    `}
  `;

  const StyledImage = styled.img`
    width: 50%;
    margin: 0 auto;

    ${above.tablet`
      width: 75%;
    `}

    ${above.desktop`
      width: 50%;
    `}
  `;

  const TextContainer = styled.div`
    width: 100%;

    ${above.tablet`
      width: 50%;
    `}
  `;

  const StyledParagraph = styled.p`
    line-height: 1.69;

    ${above.tablet`
      max-width: 75%;
    `}

    ${({ index }) => index > 0 && `margin-top ${spacing[0.5]};`};
  `;

  const StyledLink = styled(Link)`
    ${anchorColor({
      color: "black",
    })};
  `;

  return (
    <FullScreenHeight>
      <ContentContainer>
        <ImageContainer>
          <StyledImage src={bgImage.fields.heroImage.fields.file.url} alt="" />
        </ImageContainer>

        <TextContainer>
          <StyledParagraph>hey I'm Dan (he/him),</StyledParagraph>

          <StyledParagraph index={1}>
            I'm a front-end web engineer and music producer based in Brooklyn,
            New York.
          </StyledParagraph>

          <StyledParagraph index={2}>
            As a coder, I'm really into JavaScript, e-commerce, CSS,
            accessibility, developer experience and learning something new every
            day. I find a lot of joy in the process of achieving a technical
            goal.
          </StyledParagraph>

          <StyledParagraph index={3}>
            Back before the pandemic you could find me playing shows with
            indie-rock bands all over Manhattan and Brooklyn. These days, I
            mostly write and produce songs on my own out of my home studio. I’m
            planning to release a few tracks from a side project I’m currently
            manifesting in spring 2021.
          </StyledParagraph>

          <StyledParagraph index={4}>
            In my non-code/non-music time, I journal, read,&nbsp;
            <StyledLink to="/blog">
              <span className="underline">blog?</span>
            </StyledLink>
            &nbsp;moodboard, jog in McCarren Park and aimlessly ride my bike
            around the city.
          </StyledParagraph>

          <StyledParagraph index={5}>
            I write code and make music because I can't not and it's super
            trill.
          </StyledParagraph>
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
