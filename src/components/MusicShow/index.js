import React, { Component } from "react";

import Image from "components/base/Image";
import GoHomeBack from "components/base/GoHomeBack";
import debounce from "utils/debounce";

import "./MusicShow.scss";

export default class MusicShow extends Component {
  setHeightMS = (arr) => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    const musicShow = document.querySelector(".MusicShow");

    const headerFooter = header.offsetHeight + footer.offsetHeight;

    // so the 64 here is the Site container paddding top and bottom which is 48px plus the HomePage's top margin of 16px

    if (
      window.matchMedia("(min-width: 374px)").matches &&
      window.matchMedia("(max-width: 500px)").matches &&
      arr.length < 3
    ) {
      const msHeight = window.innerHeight - headerFooter - 64;
      musicShow.style.height = msHeight + "px";
    } else {
      musicShow.style.height = "auto";
    }

    if (window.matchMedia("(min-width: 1024px)").matches) {
      const msHeight = window.innerHeight - headerFooter - 80;
      musicShow.style.height = msHeight + "px";

      // const detailsContainer = document.querySelector(".MusicShow__details-container");
      // const titleContainer = document.querySelector(".MusicShow__title-container");
      // const difference = detailsContainer.offsetHeight - titleContainer.offsetHeight;

      // const links = document.querySelector(".MusicShow__links-container");

      // links.style.height = difference + "px";
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      linkKeys: [
        "spotify",
        "bandcamp",
        "apple",
        "tidal",
        "amazon",
        "deezer",
        "napster",
        "google play",
        "soundcloud",
      ],
      links: [],
      id: "",
    };
  }

  componentDidMount = () => {
    window.scroll(0, 0);

    let k = [];

    for (let key of this.state.linkKeys) {
      let o = {
        title: "",
        link: "",
      };

      if (key === "google play") {
        o.title = "google play";
        o.link = this.props.project.fields["googlePlay"];

        if (this.props.project.fields[key] !== undefined) {
          k.push(o);
        }
      } else {
        o.title = key;
        o.link = this.props.project.fields[key];
        if (this.props.project.fields[key] !== undefined) {
          k.push(o);
        }
      }
    }

    this.setState({ links: k });

    this.setHeightMS(k);

    window.addEventListener("resize", this.debounceMSHeight);
  };

  debounceMSHeight = () => {
    debounce(this.setHeightMS(this.state.links, this.state.id), 100);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.debounceMSHeight);
  }

  render() {
    const renderArtistATag = () => {
      if (this.props.project.fields.artistWebsite !== undefined) {
        return (
          <div className="MusicShow__artist-link">
            <h4 className="MusicShow__artist color-white body-serif full-width">
              by{" "}
              <a
                href={this.props.project.fields.artistWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.project.fields.artist}
              </a>
            </h4>
          </div>
        );
      } else {
        return (
          <h4 className="MusicShow__artist color-white body-serif full-width">
            by {this.props.project.fields.artist}
          </h4>
        );
      }
    };

    const renderLinkTitle = (str) => {
      const stringSplit = str.split("");

      for (let letter of stringSplit) {
        return <span>{letter}</span>;
      }
    };

    return (
      <div className="MusicShow flex items-center flex-column relative">
        <div className="MusicShow__inner col-12-dh md-col-8-dh lg-col-8-dh flex justify-center">
          <Image
            src={this.props.project.fields.artwork.fields.file.url}
            alt={this.props.project.fields.artwork.fields.file.title}
          />

          <div className="MusicShow__details-container col-12-dh  lg-col-6-dh">
            <div className="MusicShow__title-container flex justify-between items-center m0">
              <div className="flex flex-column">
                <h3 className="MusicShow__title color-white m0 body-serif">
                  {this.props.project.fields.title}
                </h3>
                {renderArtistATag()}
              </div>

              <div className="flex flex-column mt1 col-6">
                <h3 className="MusicShow__release color-white  body-serif  text-lowercase text-right">
                  {this.props.project.fields.releaseDate}
                </h3>

                <h3 className="MusicShow__role  color-white  body-serif  text-lowercase text-right">
                  {this.props.project.fields.role}
                </h3>
              </div>
            </div>

            <div className="MusicShow__links-container">
              {this.state.links.map((link, key) => {
                let hasLink = false;
                let i = [
                  "•",
                  "•",
                  "•",
                  "•",
                  "•",
                  "•",
                  "•",
                  "•",
                  "•",
                  "•",
                  "•",
                  "•",
                ];
                let j = [
                  "•",
                  "•",
                  "•",
                  "•",
                  "•",
                  "•",
                  "•",
                  "•",
                  "•",
                  "•",
                  "•",
                  "•",
                ];
                let k = [
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                ];
                if (link.link !== undefined) {
                  hasLink = true;
                }
                if (hasLink) {
                  return (
                    <span key={key}>
                      <a
                        className="MusicShow__fun-link"
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={key}
                      >
                        <div
                          className="MusicShow__links-container--inner color-white
                          body-serif flex justify-between full-width mb2"
                          key={key}
                        >
                          {i.map((sym, key) => {
                            return <span key={key}>{sym}</span>;
                          })}
                          <span>{link.title}</span>
                          {j.map((sym, key) => {
                            return <span key={key}>{sym}</span>;
                          })}
                        </div>
                      </a>

                      <a
                        className="MusicShow__mobile-link"
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={key + 10}
                      >
                        <div className="color-white  body-serif flex justify-between full-width mb1">
                          <span>{key}</span>
                          {k.map((sym, key) => {
                            return <span key={key}>{sym}</span>;
                          })}
                          <span>{link.title}</span>
                        </div>
                      </a>
                    </span>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
        <div className="MusicShow__go-back-container absolute">
          <GoHomeBack destination="/music/" cta="go back" white={true} />
        </div>
      </div>
    );
  }
}
