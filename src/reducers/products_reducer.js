import React from "react";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../actions";

const products_reducer = (state, action) => {
  //sidebar
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  //data and loading. Consider adding API
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const new_arrivals = action.payload.filter(
      (product) => product.new_arrival === true
    );
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      new_arrivals: new_arrivals,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }

  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
