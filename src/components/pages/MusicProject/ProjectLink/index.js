import React from "react";
import { makeKey } from "utils";
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
          key={makeKey(key)}
        >
          <div
            className="ProjectLink__inner color-white
            flex justify-between w100 mb2"
            key={makeKey(key)}
          >
            {i.map((sym, iSymbolKey) => {
              return <span key={makeKey(iSymbolKey)}>{sym}</span>;
            })}
            <span>{link.title}</span>
            {j.map((sym, jSymbolKey) => {
              return <span key={makeKey(jSymbolKey)}>{sym}</span>;
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
            {k.map((sym, kSymbolKey) => {
              return <span key={makeKey(kSymbolKey)}>{sym}</span>;
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
