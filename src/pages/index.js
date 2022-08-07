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
import efeLogo from '../assets/images/efe-logo.png';
import mcsa from '../assets/images/mcsa.png';
import mcse from '../assets/images/mcse.png';
import ms461 from '../assets/images/ms_461.png';
import ms761 from '../assets/images/ms_761.png';
import ms762 from '../assets/images/ms_762.png';
import ms767 from '../assets/images/ms_767.png';
import sfAdmin from '../assets/images/sf_admin.png';
import sfFsc from '../assets/images/sf_fsc.png';
import sfJs from '../assets/images/sf_js.png';
import sfPd1 from '../assets/images/sf_pd1.png';
import sfPd2 from '../assets/images/sf_pd2.png';

// import efeLogo from '../assets/images/efe-logo.png';

import SEO from '../components/SEO';

const IndexStyles = styled.div`
  background-color: #4d4d4d;
  overflow: hidden;
  width: 100vw;
  height: 130vh;
  .box {
    position: relative;
    text-align: left;
  }
  .name-icon {
    display: flex;
    gap: 3em;
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
    margin: 1.5em 0;
    font-size: 1.2em;
  }
  div.currently {
    display: flex;
    align-items: center;
    font-size: 1rem;
    margin: 0;
    font-weight: 300;
  }
  #wipro-logo {
    max-height: 80px;
  }
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }
  .icons {
    padding-top: 1rem;
    font-size: 2.3rem;
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

  .badge-wrapper {
    margin-top: 0.5em;
    display: flex;
    flex-direction: column;
    gap: 0.8em;
    flex-wrap: wrap;
  }

  .badge-set {
    display: flex;
    gap: 0.5em;
    flex-wrap: wrap;
  }

  .badge {
    width: 80px;
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
const name = 'Wootae Yang';

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
        <div className="currently">
          Currently at{' '}
          <a href="https://appirio.com/" target="_blank" rel="noreferrer">
            <span className="company">
              <img id="wipro-logo" src={wiproLogo} alt="Wipro" />
            </span>
          </a>
        </div>
        <div className="name-icon">
          <h1>{name}</h1>
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
        {/* {name.split(' ').map((str) => (
          <>
            <h1>{str}</h1>
          </>
        ))} */}
        <p className="theP">
          Salesforce/Web Developer | SQL Database MCSE
          {/* <a href="https://wyang19a.github.io">https://wyang19a.github.io</a> */}
        </p>
        <a
          href="https://www.edelmanfinancialengines.com/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="company">
            <img
              id="wipro-logo"
              src={efeLogo}
              alt="Edelman Financial Engines"
            />
          </span>
        </a>
        {/* <h3>Certifications</h3> */}
        <div className="badge-wrapper">
          <div className="badge-set">
            <img
              className="badge"
              src={sfPd1}
              alt="Salesforce Platform Developer 1"
              title="Salesforce Platform Developer 1"
            />
            <img
              className="badge"
              src={sfPd2}
              alt="Salesforce Platform Developer 2"
              title="Salesforce Platform Developer 2"
            />
            <img
              className="badge"
              src={sfAdmin}
              alt="Salesforce administrator"
              title="Salesforce administrator"
            />
            <img
              className="badge"
              src={sfJs}
              alt="Salesforce JavaScript Developer"
              title="Salesforce JavaScript Developer"
            />
            <img
              className="badge"
              src={sfFsc}
              alt="Salesforce Financial Services Cloud Accredited Professional"
              title="Salesforce Financial Services Cloud Accredited Professional"
            />
          </div>
          <div className="badge-set">
            <img
              className="badge"
              src={mcse}
              alt="MCSE: Data Management and Analytics"
              title="MCSE: Data Management and Analytics"
            />
            <img
              className="badge"
              src={mcsa}
              alt="MCSA: SQL Database Development"
              title="MCSA: SQL Database Development"
            />
            <img
              className="badge"
              src={ms461}
              alt="Querying Microsoft SQL Server 2012/2014"
              title="Querying Microsoft SQL Server 2012/2014"
            />
            <img
              className="badge"
              src={ms761}
              alt="Querying Data with Transact-SQL"
              title="Querying Data with Transact-SQL"
            />
            <img className="badge" src={ms762} alt="Developing SQL Databases" />
            <img
              className="badge"
              src={ms767}
              alt="Implementing Data Warehouse using SQL"
              title="Implementing Data Warehouse using SQL"
            />
          </div>
        </div>
      </div>
      {/* <div>On project with</div> */}
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
