import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const PortfolioStyles = styled.div`
  padding: 5.5rem;
  display: grid;

  .project-type-btn {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  .sub-btn {
    background: darkblue;
  }
`;
const SingleProjectStyle = styled.div`
  display: grid;
  /* width: 100%; */
  /* height: 500px; */
`;

const SingleProject = ({ project }) => (
  <SingleProjectStyle>
    <h2>{project.name}</h2>
    <Img fluid={project.thumbnail.asset.fluid} alt={project.name} />
    <div>{project.description}</div>
  </SingleProjectStyle>
);
const PortfolioPage = ({ data }) => {
  const projects = data.projects.nodes;
  return (
    <PortfolioStyles>
      <div className="project-type-btn">
        <div className="side-project sub-btn">Side projects</div>
        <div className="pro-project sub-btn">Professional</div>
      </div>
      {projects.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </PortfolioStyles>
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
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        description
      }
    }
  }
`;

export default PortfolioPage;
