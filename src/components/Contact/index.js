import React, { Component } from "react";

import './Contact.scss'

import SignUpForm from '../SignUpForm';

export default class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h6>This is the contact page</h6>
        <SignUpForm />
      </div>
    )
  }
}
