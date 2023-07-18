import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h4>
          <Link to="/">Home</Link>
          {product && (
            <Link to="/products">
              <IoIosArrowForward size={17} /> Products
            </Link>
          )}
          <IoIosArrowForward size={17} /> {title}
        </h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-8);
  width: 100%;
  min-height: 6vh;
  display: flex;
  align-items: center;

  span {
    width: 0.2rem;
    height: 0.2rem;
  }

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
