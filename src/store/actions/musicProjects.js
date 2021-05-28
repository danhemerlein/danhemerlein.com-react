import contentfulClient from "../../contentfulClient";
import addDateTime from "../../utils/musicProjects/addDateTime";
import addProjectHandle from "../../utils/musicProjects/addProjectHandle";
import createLinksObject from "../../utils/musicProjects/createLinksObject";

export const getMusicProjectsContent = () => {
  return (dispatch, getState) => {
    dispatch(getMusicProjectsStarted());

    contentfulClient
      .getEntries({
        content_type: "musicProject",
      })
      .then(function (entries) {
        const activeEntries = entries.items.filter(
          (project) => project.fields.archived !== true
        );

        // add date time for front-end sorting
        addDateTime(activeEntries);

        // create project handle from song title
        addProjectHandle(activeEntries);

        // create an object of links
        createLinksObject(activeEntries);

        activeEntries.sort((a, b) => {
          return a.fields.order - b.fields.order;
        });

        dispatch(getMusicProjectsSuccess(activeEntries));
      })
      .catch((err) => {
        dispatch(getMusicPorjectsFailure(err.message));
      });
  };
};

const getMusicProjectsStarted = () => ({
  type: "GET_MUSIC_PROJECTS_CONTENT_STARTED",
});

const getMusicProjectsSuccess = (payload) => ({
  type: "GET_MUSIC_PROJECTS_CONTENT_SUCCESS",
  payload,
});

const getMusicPorjectsFailure = (error) => ({
  type: "GET_MUSIC_PROJECTS_CONTENT_FAILURE",
  error,
});
