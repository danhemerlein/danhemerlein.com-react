import React from 'react';

import Site from "components/Site";

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Oops, soemthing went wrong!</h1>;

  let site = [];
  let musicProjects = [];
  let codeProjects = [];
  for (let i = 0; i < model.length; i++) {
    const element = model[i];
    if ("subTitle" in element.fields) {
      site = element;
    }
    if ("releaseDate" in element.fields) {
      musicProjects.push(element);
    }
    if ("timelineLaunchDate" in element.fields) {
      codeProjects.push(element);
    }
  }

  musicProjects = musicProjects.sort((a, b) => {
    return a.fields.order - b.fields.order;
  });

  codeProjects = codeProjects.sort((a, b) => {
    return a.fields.order - b.fields.order;
  });


  return (
    <div>
      <Site
        site={site}
        musicProjects={musicProjects}
        codeProjects={codeProjects}
      />
    </div>
  );
}

export default MainView;
