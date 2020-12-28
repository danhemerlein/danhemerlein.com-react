import contentfulClient from '../../contentfulClient'

export const getCodeProjectsContent = () => {
  return (dispatch, getState) => {
    dispatch(getCodeProjectsStarted());

    contentfulClient.getEntries({
      'content_type': 'codeProject'
    }).then(function(entries) {

      dispatch(getCodeProjectsSuccess(entries.items))
    }).catch(err => {
      dispatch(getCodePorjectsFailure(err.message))
    });
  }
}

const getCodeProjectsStarted = () => (
  { type: "GET_CODE_PROJECTS_CONTENT_STARTED" }
);

const getCodeProjectsSuccess = (payload) => (
  { type: "GET_CODE_PROJECTS_CONTENT_SUCCESS", payload }
);

const getCodePorjectsFailure = (error) => (
  { type: "GET_CODE_PROJECTS_CONTENT_FAILURE", error}
);
