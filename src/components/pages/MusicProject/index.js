import React, { useState, useEffect } from "react";

import { usePalette } from "react-palette";

import useHeight from "hooks/useHeightMS";

import Image from "components/base/Image";
import GoHomeBack from "components/base/GoHomeBack";

import "./MusicShow.scss";

const MusicProject = (props) => {
  let [linkKeys, setLinkKeys] = useState([
    "spotify",
    "bandcamp",
    "apple",
    "tidal",
    "amazon",
    "deezer",
    "napster",
    "google play",
    "soundcloud",
  ]);

  let [links, setLinks] = useState([]);

  useEffect(() => {
    let k = [];

    for (let key of linkKeys) {
      let o = {
        title: "",
        link: "",
      };
      if (key === "google play") {
        o.title = "google play";
        o.link = props.project.fields["googlePlay"];
        if (props.project.fields[key] !== undefined) {
          k.push(o);
        }
      } else {
        o.title = key;
        o.link = props.project.fields[key];
        if (props.project.fields[key] !== undefined) {
          k.push(o);
        }
      }
    }
    setLinks(k);
  }, [linkKeys, props.project.fields]);

  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const MusicProject = document.querySelector(".MusicProject");

  useHeight(header, footer, MusicProject, links);

  const { data } = usePalette(
    "https:"+props.project.fields.artwork.fields.file.url
  );

  const bgStyle  = {
    backgroundImage: `linear-gradient(45deg, ${data.lightMuted}, ${data.muted})`
  };

  const renderArtistATag = () => {
    if (props.project.fields.artistWebsite !== undefined) {
      return (
        <div className="MusicProject__artist-link">
          <h4 className="MusicProject__artist color-white body-serif full-width">
            by{" "}
            <a
              href={props.project.fields.artistWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.project.fields.artist}
            </a>
          </h4>
        </div>
      );
    } else {
      return (
        <h4 className="MusicProject__artist color-white body-serif full-width">
          by {props.project.fields.artist}
        </h4>
      );
    }
  };

  return (

    <div
      className="MusicProject flex items-center flex-col relative"
      style={bgStyle}
    >
      <div className="MusicProject__inner col-12 md:col-8 lg:col-8 flex justify-center">
        <Image
          src={props.project.fields.artwork.fields.file.url}
          alt={props.project.fields.artwork.fields.file.title}
        />

        <div className="MusicProject__details-container col-12  lg:col-6">
          <div className="MusicProject__title-container flex justify-between items-center m0">
            <div className="flex flex-col">
              <h3 className="MusicProject__title color-white m0 body-serif">
                {props.project.fields.title}
              </h3>
              {renderArtistATag()}
            </div>

            <div className="flex flex-col mt1 col-6">
              <h3 className="MusicProject__release color-white body-serif text-lowercase text-right">
                {props.project.fields.releaseDate.replace(",", '')}
              </h3>

              <h3 className="MusicProject__role color-white body-serif text-lowercase text-right">
                {props.project.fields.role}
              </h3>
            </div>
          </div>

          <div className="MusicProject__links-container">
            {links.map((link, key) => {
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
                      className="MusicProject__fun-link"
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={key}
                    >
                      <div
                        className="MusicProject__links-container--inner color-white
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
                      className="MusicProject__mobile-link"
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={key + 10}
                    >
                      <div className="color-white body-serif flex justify-between full-width mb1">
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
      <div className="MusicProject__go-back-container absolute">
        <GoHomeBack destination="/music/" cta="go back" white={true} />
      </div>
    </div>
  );
};

export default MusicProject;
