import { createGlobalStyle } from "styled-components";
import NameOfYourFontWoff from "../fonts/happy-times-NG_regular_master_web.woff";
import NameOfYourFontWoff2 from "../fonts/happy-times-NG_regular_master_web.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'happy_times';
        src: local('happy_times'), local('happyTimes'),
        url(${NameOfYourFontWoff2}) format('woff2'),
        url(${NameOfYourFontWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
