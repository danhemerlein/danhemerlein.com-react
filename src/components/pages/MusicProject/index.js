import React from "react";

import { usePalette } from "react-palette";

import useHeight from "hooks/useHeightMS";

import Image from "components/base/Image";
import GoHomeBack from "components/base/GoHomeBack";

import "./MusicProject.scss";

const MusicProject = (props) => {
  const { project } = props;

  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const MusicProject = document.querySelector(".MusicProject");

  // useHeight(header, footer, MusicProject, links);

  const { data } = usePalette(
    "https:"+project.fields.artwork.fields.file.url
  );

  const bgStyle  = {
    backgroundImage: `linear-gradient(45deg, ${data.lightMuted}, ${data.muted})`
  };

  const renderArtistATag = () => {
    if (project.fields.artistWebsite !== undefined) {
      return (
        <div className="MusicProject__artist-link">
          <h4 className="MusicProject__artist color-white body-serif full-width my_25">
            by{" "}
            <a
              href={project.fields.artistWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.fields.artist}
            </a>
          </h4>
        </div>
      );
    } else {
      return (
        <h4 className="MusicProject__artist color-white body-serif full-width my_25">
          by {project.fields.artist}
        </h4>
      );
    }
  };

  return (

    <div
      className="MusicProject flex items-center flex-col relative h100 p1 md:p2 justify-between md:justify-center my1"
      style={bgStyle}
    >
      <div className="col-12 md:col-8 lg:col-8 flex justify-center flex-col lg:flex-row">
        <Image
          src={project.fields.artwork.fields.file.url}
          alt={project.fields.artwork.fields.file.title}
        />

        <div className="col-12 lg:col-6 mb1 lg:mb0 lg:ml_5 lg:flex lg:flex-col lg:justify-center">
          <div className="flex justify-between items-center m0">
            <div className="flex flex-col">
              <h3 className="MusicProject__title color-white m0 body-serif">
                {project.fields.title}
              </h3>
              {renderArtistATag()}
            </div>

            <div className="flex flex-col mt1 col-6">
              <h3 className="MusicProject__release color-white body-serif text-lowercase text-right my_25 lg:mt0">
                {project.fields.releaseDate.replace(",", '')}
              </h3>

              <h3 className="MusicProject__role color-white body-serif text-lowercase text-right">
                {project.fields.role}
              </h3>
            </div>
          </div>

           <div className="MusicProject__links-container mt1">
            {project.fields.links.map((link, key) => {

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
                      className="none lg:inline"
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
                      className="inline lg:none"
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
