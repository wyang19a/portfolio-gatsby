// import { graphql } from 'gatsby';
import React, { useEffect } from 'react';
import styled from 'styled-components';
// import AboutPage from '../components/About';
// import ContactPage from '../components/Contact';
// import Home from '../components/Home';
// import PortfolioPage from '../components/Portfolio';
import { DiGithubAlt } from 'react-icons/di';
import { FaLinkedin, FaSalesforce } from 'react-icons/fa';
import wiproLogo from '../assets/images/wipro-logo.png';

import SEO from '../components/SEO';

const IndexStyles = styled.div`
  background-color: #4d4d4d;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  .box {
    position: relative;
    text-align: center;
  }
  .container {
    position: absolute;
    width: 85vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h1,
  p {
    color: white;
    font-size: 2rem;
    a {
      color: #46bcde;
      :visited,
      :active,
      :link {
        color: #46bcde;
      }
    }
  }
  p.theP {
    color: #46bcde;
  }
  p.currently {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 300;
  }
  #wipro-logo {
    max-height: 80px;
  }
  h1 {
    font-size: 4.5rem;
    font-weight: 700;
  }
  .icons {
    padding-top: 3rem;
    font-size: 4rem;
    color: white;
    a {
      transition: 0.3s;
      padding: 0 0.5rem;
      :visited,
      :active,
      :link {
        color: white;
      }
      :hover {
        color: #46bcde;
      }
    }
  }
  .video {
    min-width: 100vw;
    min-height: 100vh;
    filter: grayscale(1);
  }
  @media (max-width: 400px) {
    p {
      font-size: 1rem;
    }
    h1 {
      font-size: 2.5rem;
    }
    .icons {
      font-size: 2rem;
    }
  }
`;
const string = 'Wootae A. Yang';

const IndexPage = () => (
  // useEffect(() => {
  //   document.getElementById('slowvid').playbackRate = 0.75;
  // });
  <IndexStyles>
    {/* <div className="videocontainer"> */}
    {/* <video
        id="slowvid"
        className="video"
        src="https://imgur.com/tSjxbdF.mp4"
        playsInline
        autoPlay
        loop
        muted
      /> */}
    {/* </div> */}
    <SEO title="Home" />
    <div className="container">
      <div className="box">
        <h1>{string}</h1>
        {/* {string.split(' ').map((str) => (
          <>
            <h1>{str}</h1>
          </>
        ))} */}
        <p className="theP">
          Salesforce/Web Developer | SQL Database MCSE
          {/* <a href="https://wyang19a.github.io">https://wyang19a.github.io</a> */}
        </p>
        <p className="currently">
          Currently at{' '}
          <span className="company">
            <img id="wipro-logo" src={wiproLogo} alt="Wipro" />
          </span>
        </p>
        <div className="icons">
          <a
            href="https://github.com/wyang19a"
            target="_blank"
            rel="noreferrer"
          >
            <DiGithubAlt />
          </a>
          <a
            href="https://trailblazer.me/id/wootae-yang"
            target="_blank"
            rel="noreferrer"
          >
            <FaSalesforce />
          </a>
          <a
            href="https://www.linkedin.com/in/wootae-yang"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  </IndexStyles>
);
// export const query = graphql`
//   query {
//     profile: sanityProfile {
//       name
//       description
//       position
//       title
//       image {
//         asset {
//           fluid(maxWidth: 500) {
//             ...GatsbySanityImageFluid
//           }
//         }
//       }
//     }
//     logos: allSanityLogos {
//       nodes {
//         name
//         image {
//           asset {
//             fluid(maxWidth: 150) {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//         _id
//       }
//     }
//     projects: allSanityProject {
//       nodes {
//         id
//         name
//         thumbnail {
//           asset {
//             fluid(maxWidth: 400, maxHeight: 400) {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//         description
//         type
//         slug {
//           current
//         }
//       }
//     }
//   }
// `;

export default IndexPage;
