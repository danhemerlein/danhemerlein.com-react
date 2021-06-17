const initState = {
  showNewHomepage: true,
};

const SiteSettings = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_HOMEPAGE":
      return {
        ...state,
        showNewHomepage: !state.showNewHomepage,
      };
    default:
      return state;
  }
};

export default SiteSettings;
