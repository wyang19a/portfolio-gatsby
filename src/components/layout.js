import styled from 'styled-components';
import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
// import GlobalStyles from '../styles/GlobalStyles';
// import Typography from '../styles/Typography';
// import stripes from '../assets/images/stripes.svg';

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  background-size: 1500px;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);

  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
`;

const LayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

export default function Layout({ children }) {
  return (
    <LayoutStyle>
      <Nav />
      <div>
        <ContentStyles>
          {children}
          <Footer />
        </ContentStyles>
      </div>
    </LayoutStyle>
  );
}
