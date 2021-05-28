const initState = {
  content: {},
  musicPageMessage: null,
  musicPageErrorCode: null,
  loading: false,
};

const MusicPage = (state = initState, action) => {
  switch (action.type) {
    case "GET_MUSIC_PAGE_CONTENT_STARTED":
      return {
        ...state,
        loading: true,
      };

    case "GET_MUSIC_PAGE_CONTENT_SUCCESS":
      return {
        ...state,
        loading: false,
        content: action.payload,
        musicPageMessage: null,
        musicPageErrorCode: null,
      };
    case "GET_MUSIC_PAGE_CONTENT_FAILURE":
      return {
        ...state,
        loading: false,
        musicPageMessage: "there has been an error",
        musicPageErrorCode: "there has been an error",
      };

    default:
      return state;
  }
};

export default MusicPage;
