import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import motto from "../assets/motto.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            "Born from a shared passion for storytelling and creativity,
            Boxed-Bliss was established in 2020. Our founders, longtime friends
            and boardgame enthusiasts, sought to create an inclusive space where
            players of all ages and skill levels could discover games that
            inspire, challenge, and entertain. As we curate our collection, we
            prioritize quality, diversity, and fun, resulting in a range of
            titles from global classics to hidden gems. Explore Boxed-Bliss
            today and embark on an unforgettable gaming adventure!"
          </p>
        </article>
        <img src={motto} alt="nice desk" />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 600px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
