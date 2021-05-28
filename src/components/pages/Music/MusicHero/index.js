import React from "react";
import "./styles.scss";

const MusicHero = () => {
  return (
    <div className="MusicHero bg-black col-12 flex flex-col justify-center items-center">
      <h2 className="MusicHero__headline color-red lack-italic">
        young & nauseous
      </h2>
      <h3 className="MusicHero__sub-headline color-red lack-italic">
        coming spring 2021
      </h3>
    </div>
  );
};

export default MusicHero;
