import contentfulClient from "../../contentfulClient";

export const getMusicPageContent = () => {
  return (dispatch, getState) => {
    dispatch(getMusicPageStarted());

    contentfulClient
      .getEntries({
        content_type: "musicPage",
      })
      .then(function (entries) {
        dispatch(getMusicPageSuccess(entries.items));
      })
      .catch((err) => {
        dispatch(getMusicPageFailure(err.message));
      });
  };
};

const getMusicPageStarted = () => ({ type: "GET_MUSIC_PAGE_CONTENT_STARTED" });

const getMusicPageSuccess = (payload) => ({
  type: "GET_MUSIC_PAGE_CONTENT_SUCCESS",
  payload,
});

const getMusicPageFailure = (error) => ({
  type: "GET_MUSIC_PAGE_CONTENT_FAILURE",
  error,
});
