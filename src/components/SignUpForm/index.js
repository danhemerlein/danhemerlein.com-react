import React, { PureComponent } from "react";

import ENV from 'config/Enviornment';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import ReactJoiValidations  from 'react-joi-validation'
import Joi from 'joi-browser'

import './SignUpForm.scss'

const { MAILCHIMP_URL } = ENV;

ReactJoiValidations.setJoi(Joi);

const schema = Joi.object().keys({
  firstName: Joi.string().min(2).max(20).required(),
  emailAddress: Joi.string().email().required(),
  zipcode: Joi.string().length(5).required()
});

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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

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

                  const result = Joi.validate({
                    firstName: this.state.firstName,
                    emailAddress: this.state.emailAddress,
                    zipcode: this.state.zipcode
                  }, schema)

                  if (result.error) {
                    const errorMessage = result.error.message
                    console.log(errorMessage);
                    if (errorMessage.split(' ').includes('"firstName"')) {
                      this.setState({
                        message: 'oops, an error has occured. please make sure your name is between 2 and 20 characters long :]'
                      })
                    } else if (errorMessage.split(' ').includes('"emailAddress"')) {
                      this.setState({
                        message: 'oops, an error has occured. please make sure to inlcude your email :]'
                      })
                    } else if (errorMessage.split(' ').includes('"zipcode"')) {
                      this.setState({
                        message: 'oops, an error has occured. please make sure to indlude your zipcode :]'
                      })
                    }
                  }

                  else {
                    subscribe({
                      FNAME: result.value.firstName,
                      EMAIL: result.value.emailAddress,
                      MMERGE5: result.value.zipcode
                    })
                  }
              }}>
                <label className="">
                  <input
                    id="inputOne"
                    className="my1 body-serif full-width"
                    type="text"
                    placeholder="first name"
                    name="firstName"
                    value={this.state.firstNameAddress}
                    onChange={this.handleChange}
                  />
                </label>
                <label className="">
                  <input
                    id="inputTwo"
                    className="my1 body-serif full-width"
                    type="email"
                    placeholder="hello@example.com"
                    name="emailAddress"
                    value={this.state.emailAddress}
                    onChange={this.handleChange}
                  />
                </label>
                <label className="">
                  <input
                    id="inputThree"
                    className="my1 body-serif full-width"
                    type="text"
                    placeholder="zipcode"
                    name="zipcode"
                    value={this.state.zipcode}
                    onChange={this.handleChange}
                  />
                </label>
                <div className="full-width flex flex-column items-center justify-center">
                  <button className="SignUpForm__button my1 body-serif" type="submit">
                    submit
                  </button>
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
        <div className="relative full-width">
          <p className="body-serif absolute full-width center">{this.state.message}</p>
        </div>
      </div>
    )
  }
}
