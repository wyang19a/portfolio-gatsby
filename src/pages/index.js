import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import AboutPage from '../components/About';
import ContactPage from '../components/contact';
import Home from '../components/Home';
import PortfolioPage from '../components/Portfolio';

const IndexStyles = styled.div`

`;

const IndexPage = ({ data }) => {
return (
  <IndexStyles>
    <Home />
    <AboutPage data={data} />
    <PortfolioPage data={data} />
    <ContactPage />
  </IndexStyles>
)};

export const query = graphql`
  query {
    profile: sanityProfile {
      name
      description
      position
      title
      image {
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    logos: allSanityLogos {
      nodes {
        name
        image {
          asset {
            fluid(maxWidth: 150) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    projects: allSanityProject {
      nodes {
        id
        name
        thumbnail {
          asset {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        description
        type
        slug {
          current
        }
      }
    }
  }
`;

export default IndexPage;
