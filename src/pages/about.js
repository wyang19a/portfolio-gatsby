import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const AboutStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 5.5rem;
  h1.name {
    font-size: 3rem;
  }
  span.title {
    font-size: 1.5rem;
  }
  p.sub-name {
    font-size: 1rem;
    /* text-align: left; */
  }
  p.description {
    font-size: 0.8rem;
    width: 75%;
    text-align: right;
  }
`;

const AboutPage = ({ data: { profile } }) => {
  console.log(profile);
  return (
    <AboutStyles>
      <Img fluid={profile.image.asset.fluid} alt={profile.name} />
      <h1 className="name">
        {profile.name} <span className="title">{profile.title}</span>
      </h1>
      <p className="sub-name">{profile.title}</p>
      <p className="description">{profile.description}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {/* <Image /> */}
      </div>
    </AboutStyles>
  );
};

export const query = graphql`
  query {
    profile: sanityProfile {
      name
      description
      position
      title
      image {
        asset {
          fluid(maxWidth: 200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default AboutPage;
