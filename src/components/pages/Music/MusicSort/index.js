import React from "react";
import "./styles.scss";

const MusicSort = ({ handleChange }) => {
  return (
    <div className="MusicSort full-width flex justify-center mb1 md:mb2">
      <div className="flex flex-col">
        <label className="MusicSort__label text-white">
          sort
          <select
            onChange={(event) => handleChange(event)}
            className="MusicSort__select"
          >
            <option value="">default</option>
            <option value="most-recent">most recent</option>
            <option value="oldest">oldest</option>
            <option value="wrote">wrote</option>
            <option value="produced">produced</option>
            <option value="performed">perfomed</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default MusicSort;
