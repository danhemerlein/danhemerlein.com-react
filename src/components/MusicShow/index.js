import React, { Component } from "react";
import { Link } from "react-router-dom";

import Image from 'components/base/Image';
import PlayIcon from 'components/icons/Play';
import CalendarIcon from 'components/icons/Calendar';
import ChecklistIcon from 'components/icons/Checklist';

import './MusicShow.scss'

export default class MusicShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      project: (this.props.projects[this.props.match.params.id - 1]),
      image: (this.props.images[this.props.match.params.id - 1])
    }
  }

  render() {
    return (
      <div className="MusicShow mt2 flex justify-center items-center">
        <div className="col-6">
          <Image src={this.state.image.fields.file.url} alt={this.state.image.fields.title} />
        </div>
        <div className="col-6">
          <div className="flex justify-center items-center flex-column">
            <h3 className="body-serif">{this.state.project.title}</h3>
            <h3 className="body-serif">by {this.state.project.artist}</h3>
            <div className="flex items-center full-width">
              <div className="col-1">
                <CalendarIcon />
              </div>
              <div className="col-11">
                <h3 className="ml1 body-serif">{this.state.project.releaseDate}</h3>
              </div>
            </div>
            <div className="flex items-center full-width">
              <div className="col-1">
                <ChecklistIcon />
              </div>
              <div className="col-11">
                <h3 className="ml1 bold body-serif">{this.state.project.role.toUpperCase()}</h3>
              </div>
            </div>
            <a href={this.state.project.link} className="block full-width" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center full-width">
                <div className="col-1">
                  <PlayIcon />
                </div>
                <div className="col-11">
                  <h3 className="ml1 body-serif">launch project</h3>
                </div>
              </div>
            </a>
            <h3><Link to={'/music/'}><span className="body-serif">Go Back</span></Link></h3>
          </div>
        </div>
      </div>
    )
  }
}