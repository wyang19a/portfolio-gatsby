import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ProjectGrid = styled.div`
  padding: 5.5rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-rows: repeat(auto-fill, minmax(auto, 1fr));
`;

export default function SingleProjectPage({ data: { project } }) {
  // console.log(project.images[0].asset.fluid);
  return (
    <ProjectGrid>
      <h2>{project.name}</h2>
      <Img fluid={project.thumbnail.asset.fluid} />
      <div>
        <ul>
          {project.stack.map((i) => (
            <li key={i.id}>{i.name}</li>
          ))}
        </ul>
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
