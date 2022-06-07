import { GET_ERROR, GET_REQUEST, GET_SUCCESS } from "../constant";

const initialProductsState = {
  products: [],
  isLoading: false,
  error: null,
};

export const productReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SUCCESS:
      return {
        isLoading: false,
        products: action.payload,
        error: null,
      };
    case GET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
