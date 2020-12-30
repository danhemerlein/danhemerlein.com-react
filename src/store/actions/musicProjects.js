import contentfulClient from '../../contentfulClient'
import addDateTime from '../../utils/addDateTime'

export const getMusicProjectsContent = () => {
  return (dispatch, getState) => {
    dispatch(getMusicProjectsStarted());

    contentfulClient.getEntries({
      'content_type': 'musicProject'
    }).then(function(entries) {

      addDateTime(entries.items)

      entries.items.sort((a, b) => {
        return a.fields.order - b.fields.order;
      });

      entries.items.map(project => {
        var projectHandle = project.fields.title
          .replace(/[^a-zA-Z0-9 ]/g, "")
          .replace(/ /g, "-")
          .toLowerCase();
        project.fields["handle"] = projectHandle;
      })

      console.log(entries.items);



      dispatch(getMusicProjectsSuccess(entries.items))
    }).catch(err => {
      dispatch(getMusicPorjectsFailure(err.message))
    });
  }
}

const getMusicProjectsStarted = () => (
  { type: "GET_MUSIC_PROJECTS_CONTENT_STARTED" }
);

const getMusicProjectsSuccess = (payload) => (
  { type: "GET_MUSIC_PROJECTS_CONTENT_SUCCESS", payload }
);

const getMusicPorjectsFailure = (error) => (
  { type: "GET_MUSIC_PROJECTS_CONTENT_FAILURE", error}
);
