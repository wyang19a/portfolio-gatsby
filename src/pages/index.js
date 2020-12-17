// import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
// import AboutPage from '../components/About';
// import ContactPage from '../components/Contact';
// import Home from '../components/Home';
// import PortfolioPage from '../components/Portfolio';
import SEO from '../components/SEO';

const IndexStyles = styled.div`
  p {
    color: black;
  }
`;

const IndexPage = () => (
  <IndexStyles>
    <SEO title="Home" />
    <h1>Website under construction.</h1>
    <p>
      Please head to{' '}
      <a href="https://wyang19a.github.io">https://wyang19a.github.io </a>
      to view my portfolio.
    </p>
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
