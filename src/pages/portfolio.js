import React from 'react';
import styled from 'styled-components';
import projects from '../components/ProjectList';

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
    <img src={project.imgPath} alt={project.name} />
    {/* <img src="../assets/images/comp.png" alt="Hi" /> */}
  </SingleProjectStyle>
);
const PortfolioPage = () => (
  <PortfolioStyles>
    {projects.map((project) => (
      <SingleProject key={project.id} project={project} />
    ))}
  </PortfolioStyles>
);

export default PortfolioPage;
