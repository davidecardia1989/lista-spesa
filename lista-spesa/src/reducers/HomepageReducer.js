const initialState = {
  list: [],
};
const HomepageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        list: payload,
      };
    default:
      return state;
  }
};

export default HomepageReducer;
