import React, { PureComponent } from "react";

import ENV from 'config/Enviornment';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import './SignUpForm.scss'

const { MAILCHIMP_URL } = ENV;

export default class SignUpForm extends PureComponent {
  constructor(props) {
    super(...arguments)

    this.state = {
      firstName: '',
      emailAddress: '',
      zipcode : '',
      message: '',
    }
  }

  handleNameChange = event => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleEmailChange = event => {
    this.setState({
      emailAddress: event.target.value,
    });
  };

  handleZipChange = event => {
    this.setState({
      zipcode: event.target.value
    });
  };

  render() {
    return (
      <div className="SignUpForm full-width">
        <MailchimpSubscribe
          url={MAILCHIMP_URL}
          render={({ subscribe, status }) => (
            <div>
              <form className="flex flex-column items-center justify-center"
                onSubmit={(event) => {
                  event.preventDefault();
                  subscribe({
                    FNAME: this.state.firstName,
                    EMAIL: this.state.emailAddress,
                    MMERGE5: this.state.zipcode
                  })
              }}>
                <label className="">
                  <input
                    id="inputOne"
                    className="my1 body-serif full-width"
                    type="text"
                    placeholder="first name"
                    value={this.state.firstNameAddress}
                    onChange={this.handleNameChange}
                  />
                </label>
                <label className="">
                  <input
                    id="inputTwo"
                    className="my1 body-serif full-width"
                    type="email"
                    placeholder="hello@example.com"
                    value={this.state.emailAddress}
                    onChange={this.handleEmailChange}
                  />
                </label>
                <label className="">
                  <input
                    id="inputThree"
                    className="my1 body-serif full-width"
                    type="text"
                    placeholder="zipcode"
                    value={this.state.zipcode}
                    onChange={this.handleZipChange}
                  />
                </label>
                <div className="full-width flex flex-column items-center justify-center">
                  <button className="SignUpForm__button my1 body-serif" type="submit">
                    submit
                  </button>
                  <div className="relative full-width">
                    <p className="body-serif absolute full-width center">{this.state.message}</p>
                  </div>
                </div>
              </form>
              {status === 'sending' ? (
                this.setState({
                  message: 'loading...'
                })
              ) : null}
              {status === 'success' ? (
                this.setState({
                  message: 'thanks for subscribing (ﾉﾟ▽ﾟ)ﾉ'
                })
              ) : null}
              {status === 'error' ? (
                this.setState({
                  message: 'oops, please try again（＞ｙ＜）'
                })
              ) : null}
            </div>
          )}
        />
      </div>
    )
  }
}
