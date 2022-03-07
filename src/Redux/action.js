import axios from "axios";
import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionTypes";

export const getDataRequest = () => {
  return {
    type: GET_DATA_REQUEST,
  };
};

export const getDataSuccess = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  };
};

export const getDataFailure = (error) => {
  return {
    type: GET_DATA_FAILURE,
    error,
  };
};

export const getData = () => (dispatch) => {
  dispatch(getDataRequest());
  return axios
    .get("https://smartqdemo.firebaseio.com/events-data.json")
    .then((res) => {
      console.log(res.data);
      dispatch(getDataSuccess(res.data));
    })
    .catch((error) => dispatch(getDataFailure(error)));
};
