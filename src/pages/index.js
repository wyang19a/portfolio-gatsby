import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import { motion } from 'framer-motion';
import HomeImage from '../static/homeimage.png';

const HomeGridStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .Img {
    align-self: center;

    width: 28vw;
    /* background-color: red; */
    filter: invert(0.7);
  }
`;

const HomeStyles = styled.div`
  padding: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 11rem);
  transform: translateY(-60px);
  .typedString {
    font-size: 1.2rem;
    width: 75%;
    position: absolute !important;
    text-transform: uppercase;
    span:nth-child(1) {
      letter-spacing: 3px;
    }
  }
  h1 {
    font-size: 4rem;
    padding-bottom: 40px;
  }
`;

const IndexPage = ({ data: { intro } }) => {
  console.log(intro);
  return (
    <HomeGridStyle>
      <HomeStyles>
        <h1>
          Hi! <br />
          I'm Wootae,
        </h1>
        <div>
          <Typed
            className="typedString"
            strings={[
              'Fullstack Engineer / SQL Database Developer Based In Boston, MA.',
            ]}
            typeSpeed={40}
          />
        </div>
      </HomeStyles>
      <motion.div
        className="Img"
        initial={{ x: 3000 }}
        animate={{ x: 220 }}
        transition={{ delay: 3.5, type: 'tween', duration: 1 }}
      >
        <img src={HomeImage} alt="Homeimg" />
      </motion.div>
    </HomeGridStyle>
  );
};

export default IndexPage;
