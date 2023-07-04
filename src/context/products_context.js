import React from "react";
import { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";
import { games } from "../utils/games";

const ProductsContext = React.createContext();

const initialState = {
  products: [],
  isSideBarOpen: false,
  products_loading: false,
  products_error: false,
  new_arrivals: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const getProducts = (games) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const products = games;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
      console.log(error);
    }
  };

  const getSingleProduct = (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const singleProduct = games[id - 1];
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(games);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, getSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
