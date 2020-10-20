import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HomePageStyle = styled.div`
  padding: 2rem;
  h1.name {
    font-size: 3.5rem;
  }
  span.title {
    font-size: 2rem;
  }
  p.sub-name {
    font-size: 1.5rem;
  }
`;

const IndexPage = () => (
  <HomePageStyle>
    <h1 className="name">
      Wootae A. Yang, <span className="title">MCSA</span>
    </h1>
    <p className="sub-name">Fullstack Developer</p>
    <p className="description">Stuff here</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
  </HomePageStyle>
);

export default IndexPage;
