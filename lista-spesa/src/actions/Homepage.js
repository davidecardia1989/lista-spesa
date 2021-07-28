const FETCH_LIST_DATA = "FETCH_LIST_DATA";
const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchData = () => ({
  type: FETCH_LIST_DATA,
});

export const fetchSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});
