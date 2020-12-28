import contentfulClient from '../../contentfulClient'

export const getAboutPageContent = () => {
  return (dispatch, getState) => {
    dispatch(getAboutPageStarted());

    contentfulClient.getEntries({
      'content_type': 'aboutPage'
    }).then(function(entries) {
      console.log(entries.items);
      dispatch(getAboutPageSuccess(entries.items))
    }).catch(err => {
      dispatch(getAboutPageFailure(err.message))
    });
  }
}

const getAboutPageStarted = () => (
  { type: "GET_ABOUT_PAGE_CONTENT_STARTED" }
);

const getAboutPageSuccess = (payload) => (
  { type: "GET_ABOUT_PAGE_CONTENT_SUCCESS", payload }
);

const getAboutPageFailure = (error) => (
  { type: "GET_ABOUT_PAGE_CONTENT_FAILURE", error}
);
