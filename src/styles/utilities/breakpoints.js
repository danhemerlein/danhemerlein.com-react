import { useMediaQuery } from "react-responsive";
import { css } from "styled-components";

// media queries in styled components
const sizes = {
  mobile: 320,
  tablet: 720,
  desktop: 1024,
  "desktop-max": 1440,
};

export const above = Object.keys(sizes).reduce((accumulater, label) => {
  accumulater[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return accumulater;
}, {});

export const BREAKPOINT = {
  mobile: "320px",
  tablet: "720px",
  desktop: "1024px",
  desktopMax: "1440px",
};

/**
 * Check if the current viewport is greater or equal to given breakpoint
 * @param {string} "tablet", "desktop" or "desktopMax"
 * @returns {boolean}
 */
export const checkMediaQuery = (breakpoint) =>
  useMediaQuery({
    query: `(min-width: ${breakpoint})`,
  });
