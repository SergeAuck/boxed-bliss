import React from "react";
import styled from "styled-components";
import { benefits } from "../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Benefits = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <div className="section-center">
        <h3>Why buy from Us</h3>
        <Slider {...carouselSettings}>
          {benefits.map((service) => {
            const { id, title, icon, text } = service;
            return (
              <Card key={id}>
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <hr />
                <p>{text}</p>
                <hr />
              </Card>
            );
          })}
        </Slider>
      </div>
    </Wrapper>
  );
};

const Card = styled.article`
  /* extra card styles? */
  // ...
`;

const Wrapper = styled.section`
  h3 {
    text-align: center;
  }
  ,
  h4 {
    color: var(--clr-primary-1);
    text-align: center;
  }
  padding: 5rem 0rem;

  background: var(--clr-primary-8);

  .header h3 {
    margin-bottom: 2rem;
    text-align: center;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-2);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .section-center {
      transform: translateY(0rem);
    }
  }
`;

export default Benefits;
