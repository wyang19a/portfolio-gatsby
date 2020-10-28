import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const PortfolioGridStyles = styled.div`
  max-width: 80%;
  padding: 5.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 4rem;
  margin: 0 auto;
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
  h4 {
    /* font-size: 20px; */
  }
`;

const SingleProject = ({ project }) => (
  <AniLink
    paintDrip
    duration={0.3}
    color="black"
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

export default PortfolioPage;
