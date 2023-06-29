import React from "react";
import { useProductsContext } from "../context/products_context";

const NewArrivals = () => {
  const { products_loading, products_error, new_arrivals } =
    useProductsContext();
  return <div>New Arrivals</div>;
};

export default NewArrivals;
