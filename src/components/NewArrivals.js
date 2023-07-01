import React from "react";
import { useProductsContext } from "../context/products_context";
import Error from "./Error";
import Loading from "./Loading";
import styled from "styled-components";
import Product from "./Product";

const NewArrivals = () => {
  const { products_loading, products_error, new_arrivals } =
    useProductsContext();

  if (products_loading) {
    return <Loading />;
  }
  if (products_error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>new releases</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {new_arrivals.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default NewArrivals;
