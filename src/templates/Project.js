import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const ProjectGrid = styled.div`
  /* text-align: center; */
  padding: 5.5rem;
  display: grid;
  grid-gap: 1rem;
  color: black;
  height: calc(100vh - 12.9rem);
  /* grid-template-rows: repeat(auto-fill, minmax(auto, 1fr)); */
  .gatsby-image-wrapper {
    /* max-height: 60vh;
    max-width: 50vw; */
  }
  ul {
    padding: 0;
    display: grid;
    gap: 0.3rem;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  li {
    text-align: center;
    background: grey;
    color: white;
  }
  .skills {
    width: 100%;
    margin: 0 auto;
  }
  .image-description {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1.5fr 1fr;
  }
  @media (max-width: 784px) {
    .image-description {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 574px) {
    padding: 5.5rem 2rem 2rem 2rem;
  }
`;

export default function SingleProjectPage({ data: { project } }) {
  console.log(project);
  return (
    <ProjectGrid>
      <AniLink swipe to="/" duration={0.3} direction="right">
        Back to Main Page
      </AniLink>
      <h2>{project.name}</h2>
      <div className="skills">
        <ul>
          {project.stack.map((tech) => (
            <li key={tech._id}>{tech.name}</li>
          ))}
        </ul>
      </div>
      <div className="image-description">
        <Img fluid={project.thumbnail.asset.fluid} />
        <p>{project.description}</p>
      </div>
    </ProjectGrid>
  );
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
      slug {
        current
      }
      stack {
        name
        _id
      }
      thumbnail {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      description
      images {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
