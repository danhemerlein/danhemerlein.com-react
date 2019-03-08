import React, { Component } from "react";

import './Contact.scss'

import SignUpForm from 'components/SignUpForm';

export default class Contact extends Component {  
  setHeightCP = () => {        
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const contactPage = document.querySelector(".Contact");

    const headerFooter = header.offsetHeight + footer.offsetHeight;
    const cpHeight = ((window.innerHeight - headerFooter) - 32);

    contactPage.style.height = cpHeight + "px";
  }

  debounce = (func, wait, immediate) => {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  debounceCPHeight = () => {    
    this.debounce(this.setHeightCP(), 100);
  }
  
  componentDidMount = () => {
    this.setHeightCP()
    window.addEventListener("resize", this.debounceCPHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.debounceCPHeight);
  }
  
  render() {
    return (
      <div className="Contact body-serif flex flex-column items-center justify-center full-width">
        <div className="flex flex-column items-center justify-center">
          <h3 className="p0 m0">{this.props.cta}</h3>
          <h3 className="p0 mt0 mx0 mb2">{this.props.ctaTwo}</h3>
          <SignUpForm />
        </div>
      </div>
    )
  }
}
