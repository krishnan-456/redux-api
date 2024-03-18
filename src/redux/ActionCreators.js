import {
  USER_DATA_FETCH,
  USER_DATA_FETCH_FAILS,
  USER_DATA_FETCH_SUCCESS,
} from "./ActionConstants";

export const fetchUserData = () => {
  return { type: USER_DATA_FETCH };
};

export const fetchUserDataSuccess = (user) => {
  return {
    type: USER_DATA_FETCH_SUCCESS,
    payload: user,
  };
};

export const fetchUserDataFails = (error) => {
  return {
    type: USER_DATA_FETCH_FAILS,
    payload: error,
  };
};
