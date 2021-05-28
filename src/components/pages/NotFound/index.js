import React, { Component } from "react";
import { Link } from "react-router-dom";
import debounce from "utils/debounce";
import "./NotFound.scss";

export default class NotFound extends Component {
  setHeightNF = () => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const notFound = document.querySelector(".NotFound");

    const headerFooter = header.offsetHeight + footer.offsetHeight;

    // so the 64 here is the Site container paddding top and bottom which is 48px plus the HomePage's top margin of 16px
    const nfHeight = window.innerHeight - headerFooter - 48;

    notFound.style.height = nfHeight + "px";
  };

  debounceNFHeight = () => {
    debounce(this.setHeightNF(), 100);
  };

  componentDidMount = () => {
    this.setHeightNF();
    window.addEventListener("resize", this.debounceNFHeight);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.debounceNFHeight);
  }

  render() {
    return (
      <div className="NotFound">
        <div className="NotFound__inner body-serif flex items-center flex-column full-height">
          <div className="mb4">
            <h3 className="NotFound__sub-headline">This is a 404 error</h3>
            <h3 className="NotFound__sub-headline">
              Please check the url in your browser
            </h3>
            <h3 className="NotFound__sub-headline">
              You might want to <Link to="/">return home</Link>
            </h3>
          </div>
          <div className="">{this.props.icon}</div>
        </div>
      </div>
    );
  }
}
