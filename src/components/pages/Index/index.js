import CodeIcon from "components/base/icons/Code";
import ContactIcon from "components/base/icons/Contact";
import MoodboardIcon from "components/base/icons/Moodboard";
import MusicIcon from "components/base/icons/Music";
import FullScreenHeight from "components/other/FullScreenHeight";
import React from "react";
import { Link } from "react-router-dom";
import HomeBox from "./HomeBox";
import "./Index.scss";

export default function Index() {
  return (
    <FullScreenHeight>
      <div className="flex w100 flex-col md:flex-row">
        <div className="flex flex-row md:flex-col w100 flex-wrap md:flex-nowrap">
          <div className="Index__top-left w100">
            <Link to="/code">
              <HomeBox header="code" icon={<CodeIcon />} />
            </Link>
          </div>

          <div className="Index__bottom-left w100 mt1 none md:block">
            <Link to="/moodboard">
              <HomeBox header="moodboard" icon={<MoodboardIcon />} />
            </Link>
          </div>

          <div className="Index__bottom-left w100 mt1 md:mt0 block md:none">
            <Link to="/music">
              <HomeBox header="music" icon={<MusicIcon />} />
            </Link>
          </div>
        </div>

        <div className="flex flex-row md:flex-col w100 md:ml1 flex-wrap md:flex-nowrap">
          <div className="Index__top-right w100 mt1 md:mt0 none md:block">
            <Link to="/music">
              <HomeBox header="music" icon={<MusicIcon />} />
            </Link>
          </div>

          <div className="Index__top-right w100 mt1 block md:none">
            <Link to="/moodboard">
              <HomeBox header="moodboard" icon={<MoodboardIcon />} />
            </Link>
          </div>

          <div className="Index__bottom-right w100 mt1">
            <Link to="about">
              <HomeBox header="about" icon={<ContactIcon />} />
            </Link>
          </div>
        </div>
      </div>
    </FullScreenHeight>
  );
}
