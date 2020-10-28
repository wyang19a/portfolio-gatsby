import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Resume from '../static/resume.pdf';

const AboutStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  h1.name {
    font-size: 3rem;
  }
  span.title {
    font-size: 1.5rem;
  }

  p.description {
    font-size: 0.8rem;
    width: 75%;
    text-align: center;
  }
  .gatsby-image-wrapper {
    width: 150px;
    border-radius: 75px;
    border: 2px solid white;
    margin-bottom: 10px;
  }
  .logos {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    background: grey;
    padding: 20px;
    /* border-radius: 10px; */
    .gatsby-image-wrapper {
      width: 100px;
      border-radius: 0;
      border: 0;
    }
  }
  .logo {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-template-rows: auto 30px;
    img {
      justify-content: space-around;
      align-items: center;
    }
    p {
      text-align: center;
    }
  }
  .resume-btn {
    color: white;
    padding: 4px;
    margin: 4px;
    background: #0f3959;
    border: 1px solid;
  }
`;

const SingleLogo = ({ logo }) => (
  <div className="logo">
    <Img fluid={logo.image.asset.fluid} alt={logo.name} />
    <p>{logo.name}</p>
  </div>
);
const AboutPage = ({ data: { profile, logos } }) => {
  const logoList = logos.nodes;
  console.log(logoList);
  return (
    <>
      <AboutStyles>
        <Img fluid={profile.image.asset.fluid} alt={profile.name} />
        <Link href={Resume} className="resume-btn">
          View Resume
        </Link>
        <h1 className="name">
          {profile.name}, <span className="title">{profile.title}</span>
        </h1>
        <p className="sub-name">{profile.position}</p>
        <p className="description">{profile.description}</p>
        <div className="logos">
          {logoList.map((logo) => (
            <SingleLogo key={logo.id} logo={logo} />
          ))}
        </div>
      </AboutStyles>
    </>
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
  }
`;

export default AboutPage;
