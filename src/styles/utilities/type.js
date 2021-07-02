import { createGlobalStyle } from "styled-components";
import woff from "../fonts/happy-times-NG_regular_master_web.woff";
import woff2 from "../fonts/happy-times-NG_regular_master_web.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'custom_serif';
        src: local('custom_serif'), local('happyTimes'),
        url(${woff2}) format('woff2'),
        url(${woff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
