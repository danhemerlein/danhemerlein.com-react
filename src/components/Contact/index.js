import React, { Component } from "react";

import './Contact.scss'

import SignUpForm from '../SignUpForm';

export default class Contact extends Component {
  render() {
    return (
      <div className="Contact body-serif my2 flex flex-column items-center justify-center">
        <div className="flex flex-column items-center justify-center col-3">
          <h3 className="p0 m0">{this.props.cta}</h3>
          <h3 className="p0 mt0 mx0 mb2">{this.props.ctaTwo}</h3>
          <SignUpForm />
          <h3 className="mt4">Or feel free to email me <a className="underline" href="mailto:danhemerlein@gmail.com">directly</a></h3>
        </div>
      </div>
    )
  }
}
