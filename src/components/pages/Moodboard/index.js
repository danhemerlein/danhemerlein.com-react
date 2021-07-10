import GoHomeBack from "components/base/GoHomeBack";
import _ from "lodash";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { above } from "styles/utilities";
import { remHelper } from "utils";

const PageContainer = styled(FlexContainer)`
  padding: ${remHelper[16]} 0;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const GoHomeContainer = styled(FlexContainer)`
  width: 100%;
`;

const MoodboardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${remHelper[16]};

  ${above.tablet`
    flex-direction: row
  `}
`;

const MoodboardContentInner = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;

  &:first-of-type > img {
    margin-bottom: ${remHelper[16]};
  }

  ${above.tablet`
    ${({ first }) => first && `margin-right: ${remHelper[8]};`}
    ${({ second }) => second && `margin-left: ${remHelper[8]};`}
    &:first-of-type > img {
      margin-bottom: 0;
    }

    width: 50%;
  `}
`;

const Moodboard = ({ images }) => {
  const isInViewport = () => {
    if (!divRef.current) return false;
    const { top } = divRef.current.getBoundingClientRect();
    return top <= window.innerHeight;
  };

  const handleScroll = () => {
    const bool = isInViewport();
    if (bool) {
      window.scrollTo(0, 0);
    }
  };

  const divRef = useRef();

  const renderGalleryRow = (imageGroup, index) => {
    const imageOneURL = imageGroup[0].fields.file.url;
    const imageOneTitle = imageGroup[0].fields.file.title;
    let imageTwoURL;
    let imageTwoTitle;

    const twoImages = imageGroup.length === 2;

    if (twoImages) {
      imageTwoURL = imageGroup[1].fields.file.url;
      imageTwoTitle = imageGroup[1].fields.file.title;
    }

    return (
      <MoodboardContent key={index}>
        <MoodboardContentInner first>
          <StyledImg src={imageOneURL} alt={imageOneTitle} />
        </MoodboardContentInner>

        {twoImages ? (
          <MoodboardContentInner second>
            <StyledImg src={imageTwoURL} alt={imageTwoTitle} />
          </MoodboardContentInner>
        ) : null}
      </MoodboardContent>
    );
  };

  useEffect(() => {
    const debouncedScroll = _.debounce(handleScroll, 250);
    window.addEventListener("scroll", debouncedScroll);
  }, []);

  const imageMatrix = images[0].fields.images.reduce(
    (rows, image, index) =>
      (index % 2 === 0
        ? rows.push([image])
        : rows[rows.length - 1].push(image)) && rows,
    []
  );

  return (
    <PageContainer wrap="wrap">
      {imageMatrix.map((imageGroup, index) =>
        renderGalleryRow(imageGroup, index, imageMatrix)
      )}
      <GoHomeContainer justify="center">
        <GoHomeBack destination="/" cta="go back" white={false} />
      </GoHomeContainer>
      <div ref={divRef} />
    </PageContainer>
  );
};
export default Moodboard;
