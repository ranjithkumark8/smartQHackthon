import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionTypes";

const initialData = {
  isLoading: true,
  isError: false,
  data: {},
};

export const dataReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    }
    case GET_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
