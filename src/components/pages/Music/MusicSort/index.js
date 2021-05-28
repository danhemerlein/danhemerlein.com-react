import React from "react";
import "./styles.scss";

const MusicSort = ({ handleChange }) => {
  return (
    <div className="MusicSort full-width flex justify-center mb1 md:mb2">
      <div className="flex flex-col">
        <label
          htmlFor="sort"
          className="MusicSort__label  body-serif  text-white"
        >
          sort
        </label>
        <select
          name="sort"
          id="sort"
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
      </div>
    </div>
  );
};

export default MusicSort;
