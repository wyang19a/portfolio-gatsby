import styled from 'styled-components';
import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import Typography from '../styles/Typography';
import GlobalStyles from '../styles/GlobalStyles';

const ContentStyles = styled.div`
  /* background: linear-gradient(to right, #010048, #090088); */
  /* background: black; */
  /* padding: 5.5rem; */
  color: white;
  /* width: calc(100vh - 11rem); */
  /* height: 100vh; */
  /* display: grid; */
`;

const LayoutStyle = styled.div`
  /* display: grid; */
  /* grid-template-columns: var(--navwidth) 1fr; */
  height: calc(100vh - 4rem);
  footer {
    /* position: relative; */
    display: grid;
    z-index: 100;
    width: 100%;
    background-color: black;
    text-align: center;
    /* border-top: 1px solid var(--bordercolor); */
    font-size: 10px;
    color: white;
  }
`;

export default function Layout({ children }) {
  return (
    <LayoutStyle>
      <GlobalStyles />
      <Typography />
      <Nav location={typeof window !== 'undefined' ? window.location : ''} />
      <ContentStyles>{children}</ContentStyles>
      <Footer />
    </LayoutStyle>
  );
}
