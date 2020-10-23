import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const PortfolioStyles = styled.div`
  padding: 5.5rem;
  display: grid;
`;
const SingleProjectStyle = styled.div`
  width: 100%;
  height: 500px;
`;

const SingleProject = ({ project }) => (
  <SingleProjectStyle>
    <h2>{project.name}</h2>
    {/* <img src={project.imgPath} alt={project.name} /> */}
    {/* <img src="../assets/images/comp.png" alt="Hi" /> */}
  </SingleProjectStyle>
);
const PortfolioPage = ({ data }) => {
  const projects = data.projects.nodes;
  return (
    <PortfolioStyles>
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
      }
    }
  }
`;

export default PortfolioPage;
