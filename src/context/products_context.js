import { SIDEBAR_OPEN } from "../actions";
import React from "react";
import { useContext, useEffect, useReducer } from "react";

const ProductsContext = createContext();

const initialState = {
  isSideBarOpen: false,
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
