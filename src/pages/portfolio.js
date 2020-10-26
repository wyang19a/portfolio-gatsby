import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const PortfolioGridStyles = styled.div`
  max-width: 80%;
  padding: 5.5rem;
  padding-right: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 4rem;
`;
const SingleProjectStyle = styled.div`
  text-align: center;
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    /* --rows: auto auto 500px; */
  }
  /* grid-template-rows: var(--rows, subgrid); */
  grid-row: span 3;
  grid-gap: 1 rem;
  h2 {
    margin: 0;
  }
  /* width: 100%; */
  /* height: 500px; */
  /* grid-row: 3; */
  /* grid-gap: 1rem; */
  /* grid-template-rows: repeat(auto-fill, minmax(300px, 1fr)); */
`;

const SingleProject = ({ project }) => (
  <SingleProjectStyle>
    <h2>{project.name}</h2>
    {project.type ? <p>Professional</p> : <p>Personal Side Project</p>}
    <div>{project.description}</div>

    {/* <Img fluid={project.thumbnail.asset.fluid} alt={project.name} /> */}
  </SingleProjectStyle>
);
const PortfolioPage = ({ data }) => {
  const projects = data.projects.nodes;
  // console.log(projects);
  return (
    <PortfolioGridStyles>
      {projects.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </PortfolioGridStyles>
  );
};

export const query = graphql`
  query {
    projects: allSanityProject {
      nodes {
        id
        name
        thumbnail {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        description
        type
      }
    }
  }
`;

export default PortfolioPage;
