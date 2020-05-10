import React, { Component } from "react";
import { Link } from "react-router-dom";
import debounce from "utils/debounce";

import './NotFound.scss'

export default class NotFound extends Component {
  setHeightHP = () => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const notFound = document.querySelector(".NotFound");

    const headerFooter = header.offsetHeight + footer.offsetHeight;

    // so the 64 here is the Site container paddding top and bottom which is 48px plus the HomePage's top margin of 16px

    const nfHeight = ((window.innerHeight - headerFooter) - 64);

    notFound.style.height = nfHeight + "px";
  }

  debounceNFHeight = () => {
    debounce(this.setHeightHP(), 100);
  }

  componentDidMount = () => {
    this.setHeightHP();
    window.addEventListener("resize", this.debounceNFHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.debounceNFHeight);
  }

  render() {
    return (
      <div className="NotFound">
        <div className="NotFound__inner body-serif flex items-center flex-column justify-center full-height">
          <h3>This is a 404 error. Please check the url in your browser</h3>
          <h3>
            You might want to <Link to="/">return home</Link>
          </h3>
        </div>
      </div>
    );
  }
}
