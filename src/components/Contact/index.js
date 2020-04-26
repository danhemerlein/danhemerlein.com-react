import React, { Component } from "react";
import debounce from "utils/debounce";
import GoHomeBack from "components/base/GoHomeBack";

import './Contact.scss'

import SignUpForm from 'components/SignUpForm';

export default class Contact extends Component {
  setHeightCP = () => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const contactPage = document.querySelector(".Contact");

    const headerFooter = header.offsetHeight + footer.offsetHeight;
    const cpHeight = ((window.innerHeight - headerFooter) - 64);

    contactPage.style.height = cpHeight + "px";
  }

  debounceCPHeight = () => {
    debounce(this.setHeightCP(), 100);
  }

  componentDidMount = () => {
    this.setHeightCP()
    window.addEventListener("resize", this.debounceCPHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.debounceCPHeight);
  }

  render() {
    return <div className="Contact body-serif flex flex-column items-center justify-center full-width">
        <div className="flex  flex-column items-center justify-center">
          <h3 className="p0 m0">subscribe to my newsletter</h3>
          <h3 className="p0 mt0 mx0 mb2">for updates on what I'm up to</h3>
          <SignUpForm />
          <div className="mt2">
            <GoHomeBack destination="/" cta="go home" white={false} />
          </div>
        </div>
      </div>;
  }
}
