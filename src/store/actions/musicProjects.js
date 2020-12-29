import contentfulClient from '../../contentfulClient'

export const getMusicProjectsContent = () => {
  return (dispatch, getState) => {
    dispatch(getMusicProjectsStarted());

    contentfulClient.getEntries({
      'content_type': 'musicProject'
    }).then(function(entries) {

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
