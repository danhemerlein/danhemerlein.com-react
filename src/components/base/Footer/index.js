import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="flex justify-center items-center">
        <ul className="Footer__list list-style-none p0">
          <li className="inline-block">
            <a
              href="https://github.com/danhemerlein"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>

          <li className="inline-block ml1 lg:ml2">
            <a
              href="https://workingnotworking.com/58170-dan"
              target="_blank"
              rel="noopener noreferrer"
            >
              working not working
            </a>
          </li>

          <li className="inline-block ml1 lg:ml2">
            <a
              href="https://www.are.na/dan-hemerlein"
              target="_blank"
              rel="noopener noreferrer"
            >
              are.na
            </a>
          </li>

          <li className="inline-block ml1 lg:ml2">
            <a
              href="https://medium.com/@danhemerlein"
              target="_blank"
              rel="noopener noreferrer"
            >
              medium
            </a>
          </li>

          <li className="inline-block ml1 lg:ml2">
            <a
              href="https://twitter.com/danhemerlein"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
          </li>

          <li className="inline-block ml1 lg:ml2">
            <a
              href="https://www.instagram.com/danhemerlein/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
          </li>
        </ul>
        <div className="Footer__small-container flex">
          <small className="Footer__small self-end">© Dan Hemerlein 2021</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
