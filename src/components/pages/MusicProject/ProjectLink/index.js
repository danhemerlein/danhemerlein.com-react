import React from "react";
import "./styles.scss";

const Links = (props) => {
  const { key, link } = props;
  let hasLink = false;
  const i = ["•", "•", "•", "•", "•", "•", "•", "•", "•", "•", "•", "•"];
  const j = ["•", "•", "•", "•", "•", "•", "•", "•", "•", "•", "•", "•"];
  const k = [
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
            className="ProjectLink__inner color-white
            flex justify-between w100 mb2"
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
          <div className="color-white flex justify-between w100 mb1">
            <span>{key}</span>
            {k.map((sym, key) => {
              return <span key={key}>{sym}</span>;
            })}
            <span>{link.title}</span>
          </div>
        </a>
      </span>
    );
  }
  return null;
};

export default Links;
