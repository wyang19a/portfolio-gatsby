import styled from 'styled-components';
import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
// import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
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
  background: #010048;
  /* padding: 5.5rem; */
  color: white;
  width: 100%;
  height: 100vh;
  display: grid;
`;

const LayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  /* 
  .box-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .box-area li {
    position: absolute;
    display: block;
    list-style: none;
    width: 25px;
    height: 25px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 20s linear infinite;
    bottom: -100px;
  }

  .box-area li:nth-child(1) {
    left: 86%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }
  .box-area li:nth-child(2) {
    left: 36%;
    width: 30px;
    height: 30px;
    animation-delay: 1.5s;
    animation-duration: 10s;
  }
  .box-area li:nth-child(3) {
    left: 70%;
    width: 100px;
    height: 100px;
    animation-delay: 5.5s;
  }
  .box-area li:nth-child(4) {
    left: 42%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 15s;
  }
  .box-area li:nth-child(5) {
    left: 65%;
    width: 40px;
    height: 40px;
    animation-delay: 0s;
  }
  .box-area li:nth-child(6) {
    left: 60%;
    width: 110px;
    height: 110px;
    animation-delay: 3.5s;
  }
  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(-800px) rotate(360deg);
      opacity: 0;
    }
  } */

  footer {
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
  }
`;

export default function Layout({ children }) {
  return (
    <LayoutStyle>
      <Typography />
      <Nav location={window.location} />
      <div>
        <ContentStyles>
          {/* <div className="animation-area">
            <ul className="box-area">
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div> */}
          {children}
          <Footer />
        </ContentStyles>
      </div>
    </LayoutStyle>
  );
}
