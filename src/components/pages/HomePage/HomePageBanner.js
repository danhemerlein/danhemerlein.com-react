import styled from "styled-components";
import { P } from "styles/elements";
import { above } from "styles/utilities";
import { remHelper } from "utils";

const Banner = styled.a`
  background-color: ${({ theme }) => theme.light.black};
  padding: ${remHelper[4]} 0;
  text-align: center;
  transition: background 0.25s ease-in-out;
  border-top: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  border-color: ${({ theme }) => theme.light.black};

  ${({ desktop }) => desktop && `display: none;`}

  ${({ mobile }) =>
    mobile &&
    `
      display: flex;
      align-items: center;
      height: 200px;
      border-bottom: 1px solid;

      span {
        width: 100%;
      }
    `}

  span {
    color: ${({ theme }) => theme.light.white};
    transition: color 0.25s ease-in-out;
  }

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.light.white};
    span {
      color: ${({ theme }) => theme.light.black};
    }
  }

  ${above.desktop`
    ${({ mobile }) => mobile && `display: none;`}
    ${({ desktop }) => desktop && `display: block;`}
  `}
`;

export default function HomePageBanner({ mobile, desktop }) {
  return (
    <Banner
      href="https://www.youngandnauseo.us/"
      target="_blank"
      rel="noopener noreferrer"
      mobile={mobile}
      desktop={desktop}
    >
      <P as="span" textCenter>
        young and nauseous
      </P>
    </Banner>
  );
}
