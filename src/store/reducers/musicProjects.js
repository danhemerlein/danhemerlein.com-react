const initState = {
  content: {},
  musicProjectsMessage: null,
  musicProjectsErrorCode: null,
  loading: false,
};

const MusicProjects = (state = initState, action) => {
  switch (action.type) {
    case "GET_MUSIC_PROJECTS_CONTENT_STARTED":
      return {
        ...state,
        loading: true,
      };

    case "GET_MUSIC_PROJECTS_CONTENT_SUCCESS":
      return {
        ...state,
        loading: false,
        content: action.payload,
        musicProjectsMessage: null,
        musicProjectsErrorCode: null,
      };
    case "GET_MUSIC_PROJECTS_CONTENT_FAILURE":
      return {
        ...state,
        loading: false,
        musicProjectsMessage: "there has been an error",
        musicProjectsErrorCode: "there has been an error",
      };

    default:
      return state;
  }
}

export default MusicProjects;
