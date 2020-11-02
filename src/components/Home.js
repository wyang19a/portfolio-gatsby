import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import { motion } from 'framer-motion';
import HomeImage from '../static/homeimage.png';
import Particles from 'react-particles-js';
import ParticlesSettings from '../components/ParticlesSettings';

const Container = styled.div `
  background-color: black;
  display: grid;
  height: 80vh;
`
const HomeStyle = styled.div`
  padding: 5.5rem;
  display: grid;
  position: absolute;
  align-items: center;
  height: 50vh;
  grid-template-columns: 1fr 1fr;
  align-self: center;
  .Img {
    width: 65%;
    filter: invert(1);
    /* transform: translateY(50px) !important; */
  }
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
  @media (max-width: 1200px) {
    .typedString {
      font-size: 1rem;
    }
    h1 {
      font-size: 3rem;
    }
  }
`;

const Home = ({ data }) => {
  console.log(data);
return (
  <Container>
    <Particles params={ParticlesSettings} />
  <HomeStyle>
    <div>
      <h1>
        Hi! <br />
        I'm Wootae,
      </h1>
      <div>
        <Typed
          className="typedString"
          strings={[
            `Fullstack Engineer / SQL Database Developer <br/> Based In Boston, MA.`,
          ]}
          typeSpeed={40}
        />
      </div>
    </div>
    <motion.div
      className="Img"
      initial={{ x: 3000, y: 50 }}
      animate={{ x: 220 }}
      transition={{ delay: 3.5, type: 'tween', duration: 1 }}
    >
      <img src={HomeImage} alt="Homeimg" />
    </motion.div>
  </HomeStyle>
  </Container>
)};
export default Home;
