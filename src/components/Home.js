import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import { motion } from 'framer-motion';
import Particles from 'react-particles-js';
import ParticlesSettings from './ParticlesSettings';

const Container = styled.div`
  background-color: black;
  display: grid;
  height: 80vh;
  @media (max-width: 564px) {
    height: 60vh;
  }
`;
const HomeStyle = styled.div`
  padding: 5.5rem;
  display: grid;
  position: absolute;
  align-items: center;
  max-width: 100%;
  height: 50vh;
  grid-template-columns: 1fr 1fr;
  align-self: center;

  .leftPane {
    transform: translateY(2.5rem);
  }
  .Img {
    width: 65%;
    filter: invert(1);
  }
  .typedContainer {
    height: 2.5rem;
  }
  .typedString {
    font-size: 1.2rem;
    text-transform: uppercase;
    span:nth-child(1) {
      letter-spacing: 2px;
    }
  }
  h1 {
    font-size: 4rem;
    padding-bottom: 40px;
  }
  .particles {
    height: 100%;
  }
  @media (max-width: 1200px) {
    .typedString {
      font-size: 1rem;
    }
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 900px) {
    display: flex;
    .Img {
      display: none;
    }
    .typedString {
      width: 100%;
    }
  }
  @media (max-width: 564px) {
    padding: 2rem;
    h1 {
      font-size: 3rem;
    }
  }
`;

const Home = () => (
  <Container id="home">
    <Particles className="particles" params={ParticlesSettings} />
    <HomeStyle>
      <div className="leftPane">
        <h1>
          Hi! <br />
          I'm Wootae,
        </h1>
        <div className="typedContainer">
          <Typed
            className="typedString"
            strings={[
              `Fullstack Engineer / SQL Database Developer Based In Boston, MA.`,
            ]}
            typeSpeed={40}
          />
        </div>
      </div>
    </HomeStyle>
  </Container>
);
export default Home;
