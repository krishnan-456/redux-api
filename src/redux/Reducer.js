import axios from "axios";
import {
  USER_DATA_FETCH,
  USER_DATA_FETCH_FAILS,
  USER_DATA_FETCH_SUCCESS,
} from "./ActionConstants";

import {
  fetchUserData,
  fetchUserDataSuccess,
  fetchUserDataFails,
} from "./ActionCreators";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA_FETCH:
      return { ...state, loading: true };
    case USER_DATA_FETCH_SUCCESS:
      return { loading: false, data: action.payload };
    case USER_DATA_FETCH_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const fetchProductData = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUserData());
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(fetchUserDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchUserDataFails(error.message));
    }
  };
};

export default Reducer;
