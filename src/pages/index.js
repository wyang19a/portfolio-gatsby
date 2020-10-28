import React from 'react';
import styled from 'styled-components';

const HomeStyles = styled.div`
  padding: 5.5rem;
  p {
    position: absolute;
    color: transparent;
    letter-spacing: 5px;
  }
  p:before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    color: white;
    overflow: hidden;
    border-right: 1px solid white;
    animation: type 5s steps(56) 1;
    white-space: nowrap;
  }
  @keyframes type {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;

const IndexPage = () => (
  <HomeStyles>
    <h1>WELCOME</h1>
    <p data-text="Fullstack developer based in Boston, MA">
      Fullstack developer based in Boston, MA
    </p>
  </HomeStyles>
);

export default IndexPage;
