import React, { Component } from "react";

import './Contact.scss'

import SignUpForm from '../SignUpForm';

export default class Contact extends Component {
  render() {
    return (
      <div className="Contact body-serif flex flex-column items-center justify-center">
        <h3 className="p0 m0">Subscribe to my Newsletter</h3>
        <h3 className="p0 mt0 mx0 mb2">I promise I won't spam ya ;)</h3>
        <SignUpForm />
        <h3>Or feel free to email me <a className="underline" href="mailto:danhemerlein@gmail.com">directly</a></h3>
      </div>
    )
  }
}
