import React from "react";
import "./styles.scss";

const Links = (props) => {
  const { key, link } = props;
  let hasLink = false;
  const i = [
    ["i0", "•"],
    ["i1", "•"],
    ["i2", "•"],
    ["i3", "•"],
    ["i4", "•"],
    ["i5", "•"],
    ["i6", "•"],
    ["i7", "•"],
    ["i8", "•"],
    ["i9", "•"],
    ["i10", "•"],
    ["i11", "•"],
  ];
  const j = [
    ["j0", "•"],
    ["j1", "•"],
    ["j2", "•"],
    ["j3", "•"],
    ["j4", "•"],
    ["j5", "•"],
    ["j6", "•"],
    ["j7", "•"],
    ["j8", "•"],
    ["j9", "•"],
    ["j10", "•"],
    ["j11", "•"],
  ];
  const k = [
    ["k0", "."],
    ["k1", "."],
    ["k2", "."],
    ["k3", "."],
    ["k4", "."],
    ["k5", "."],
    ["k6", "."],
    ["k7", "."],
    ["k8", "."],
    ["k9", "."],
    ["k10", "."],
    ["k11", "."],
    ["k12", "."],
    ["k13", "."],
    ["k14", "."],
    ["k15", "."],
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
        >
          <div
            className="ProjectLink__inner color-white
            flex justify-between w100 mb2"
          >
            {i.map((item) => {
              const [id, sym] = item;
              return <span key={id}>{sym}</span>;
            })}
            <span>{link.title}</span>
            {j.map((item) => {
              const [id, sym] = item;
              return <span key={id}>{sym}</span>;
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
            {k.map((item) => {
              const [id, sym] = item;

              return <span key={id}>{sym}</span>;
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
