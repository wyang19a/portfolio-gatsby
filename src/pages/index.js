import React from 'react';
import styled from 'styled-components';

const HomeStyles = styled.div`
  padding: 5.5rem;
  h1.name {
    font-size: 3.5rem;
  }
  span.title {
    font-size: 2rem;
  }
  p.sub-name {
    font-size: 1.5rem;
    text-align: left;
  }
  p.description {
    width: 70%;
  }
`;

const IndexPage = () => (
  <HomeStyles>
    <h1>WELCOME</h1>
    <p>this is home page</p>
  </HomeStyles>
);

export default IndexPage;
