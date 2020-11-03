import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const PortfolioGridStyles = styled.div`
  background-color: #eee;
  max-width: 100%;
  padding: 5.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  @media (max-width: 564px) {
    padding: 5.5rem 2rem 2rem 2rem;
  }
`;
const SingleProjectStyle = styled.div`
  text-align: center;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-gap: 1rem;
  margin-bottom: 0;
  h2 {
    margin: 0;
  }
  cursor: pointer;
  .gatsby-image-wrapper {
    transition: 0.5s;
    /* border-radius: 6px; */
  }
  .post-content {
    transition: 0.5s;
    background-color: #ffffffdd;
    margin: 0 50px;
    padding: 15px;
    color: black;
    height: 50px;
    align-content: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    /* border: 1px solid var(--bordercolor); */
    /* border-radius: 6px; */
    transform: translateY(-60px);
  }
  .p-type {
    color: #e77f67;
    margin: 10px 0 0 0;
    font-size: 10px;
  }
  :hover .gatsby-image-wrapper {
    box-shadow: 0 0 30px white;
  }
  :hover .post-content {
    transform: translateY(-80px);
  }
`;

const SingleProject = ({ project }) => (
  <AniLink
    swipe
    duration={0.3}
    direction="left"
    to={`/portfolio/${project.slug.current}`}
  >
    <SingleProjectStyle>
      <Img fluid={project.thumbnail.asset.fluid} alt={project.name} />
      <div className="post-content">
        <h4>{project.name}</h4>
        {project.type ? (
          <strong className="p-type">Professional</strong>
        ) : (
          <p className="p-type">Side Project</p>
        )}
        {/* <div>{project.description}</div> */}
      </div>
    </SingleProjectStyle>
  </AniLink>
);
const PortfolioPage = ({ data }) => {
  const projects = data.projects.nodes;
  // console.log(projects);
  return (
    <PortfolioGridStyles id="portfolio">
      {projects.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </PortfolioGridStyles>
  );
};

export default PortfolioPage;
