import axios from "axios";
import { API_URL, GET_ERROR, GET_REQUEST, GET_SUCCESS } from "../constant";

export const fetchApiData = () => async (dispatch) => {
  dispatch({ type: GET_REQUEST });
  try {
    const res = await axios.get(API_URL);
    dispatch({ type: GET_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: error.message });
  }
};

// export const getProductsRequestAction = () => {
//   return {
//     type: GET_REQUEST,
//   };
// };
// export const getProductsSuccessAction = (data) => {
//   return {
//     type: GET_SUCCESS,
//     payload: data,
//   };
// };
// export const getProductsErrorAction = (error) => {
//   return {
//     type: GET_ERROR,
//     payload: error,
//   };
// };
