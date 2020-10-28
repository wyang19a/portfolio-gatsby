import styled from 'styled-components';
import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
// import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import GlobalStyles from '../styles/GlobalStyles';
// import stripes from '../assets/images/stripes.svg';

// const SiteBorderStyles = styled.div`
//   max-width: 1000px;
//   margin: 12rem auto 4rem auto;
//   margin-top: clamp(2rem, 10vw, 12rem);
//   background-size: 1500px;
//   padding: 5px;
//   padding: clamp(5px, 1vw, 25px);

//   @media (max-width: 1100px) {
//     margin-left: 1.5rem;
//     margin-right: 1.5rem;
//   }
// `;

const ContentStyles = styled.div`
  /* background: linear-gradient(to right, #010048, #090088); */
  background: var(--medblue);
  /* padding: 5.5rem; */
  color: white;
  width: 100%;
  height: 100vh;
  display: grid;
`;

const LayoutStyle = styled.div`
  display: grid;
  grid-template-columns: var(--navwidth) 1fr;
  footer {
    position: absolute;
    bottom: 0;
    z-index: 10;
    width: calc(100% - var(--navwidth));
    background-color: var(--darkblue);
    text-align: right;
    border-top: 1px solid var(--bordercolor);
    font-size: 10px;
    p {
      padding-right: 20px;
    }
  }
`;

export default function Layout({ children }) {
  return (
    <LayoutStyle>
      <GlobalStyles />
      <Typography />
      <Nav location={window.location} />
      <ContentStyles>
        {children}
        <Footer />
      </ContentStyles>
    </LayoutStyle>
  );
}
