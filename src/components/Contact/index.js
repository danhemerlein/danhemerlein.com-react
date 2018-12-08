import React, { Component } from "react";
import { Link } from "react-router-dom";

import './Contact.scss'

import SignUpForm from 'components/SignUpForm';

export default class Contact extends Component {
  render() {
    return (
      <div className="Contact body-serif my2 flex flex-column items-center justify-center full-width">
        <div className="flex flex-column items-center justify-center">
          <h3 className="p0 m0">{this.props.cta}</h3>
          <h3 className="p0 mt0 mx0 mb2">{this.props.ctaTwo}</h3>
          <SignUpForm />
          <h3 className="mt4">Or feel free to email me <a className="underline" href="mailto:danhemerlein@gmail.com">directly</a></h3>
        </div>
        <Link to="/" className="go-home body-serif"> Go Home</Link >
      </div>
    )
  }
}
