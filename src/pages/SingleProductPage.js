import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import { formatPrice } from "../utils/priceConverter";
import { useEffect } from "react";

const SingleProductPage = () => {
  const { id } = useParams();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    getSingleProduct,
  } = useProductsContext();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    id: sku,
    image,
    images,
    description,
    stars,
    reviews,
    stock,
    number_of_players,
  } = product;

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In Stock" : "out of stock"}
            </p>
            <p className="info">
              <span>Number of Players : </span>
              {number_of_players}
            </p>
            <p className="info">
              <span>SKU : </span>
              {sku}
            </p>

            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-4);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    width: 300px;
    display: grid;
    grid-template-columns: 175px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
