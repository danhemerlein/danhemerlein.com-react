import React from 'react';

import Site from "components/Site";

const MainView = ({ model }) => {

  if (!model || model.isError) return <h1>Oops, soemthing went wrong!</h1>;

  return (
    <div>
      <Site
        aboutPage={model.aboutPage}
        musicPage={model.musicPage}
        moodboard={model.moodboard}
        musicProjects={model.musicProject}
        codeProjects={model.codeProject}
      />
    </div>
  );
}

export default MainView;
