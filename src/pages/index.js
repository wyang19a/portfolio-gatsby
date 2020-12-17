// import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
// import AboutPage from '../components/About';
// import ContactPage from '../components/Contact';
// import Home from '../components/Home';
// import PortfolioPage from '../components/Portfolio';
import { DiGithubAlt } from 'react-icons/di';
import { FaLinkedin } from 'react-icons/fa';
import SEO from '../components/SEO';

const IndexStyles = styled.div`
  /* overflow: hidden; */
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
    text-shadow: 0 0 10px #c0c0c0;
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
    filter: grayscale();
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

const IndexPage = () => (
  <IndexStyles>
    {/* <div className="videocontainer"> */}
    <video
      className="video"
      src="https://imgur.com/LaYl6bC.mp4"
      playsInline
      autoPlay
      loop
      muted
    />
    {/* </div> */}
    <SEO title="Home" />
    <div className="container">
      <div className="box">
        <h1>New Site Coming Soon</h1>
        <p>
          Please head to{' '}
          <a href="https://wyang19a.github.io">https://wyang.github.io</a> to
          view my portfolio.
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
