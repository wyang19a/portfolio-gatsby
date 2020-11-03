import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Resume from '../static/resume.pdf';

const AboutStyles = styled.div`
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5.5rem;
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
  .gatsby-image-wrapper.profile-pic {
    width: 150px;
    border-radius: 75px;
    border: 2px solid white;
    margin-bottom: 10px;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(8, 100px);
    gap: 2rem;
  }
  .logo {
    /* display: grid; */
    /* padding-left: 20px;
    grid-template-rows: auto 30px;*/
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
  @media (max-width: 1050px) {
    .container {
      grid-template-columns: repeat(4, 100px);
    }
  }
  @media (max-width: 564px) {
    .container {
      grid-template-columns: repeat(2, 100px);
    }
    padding: 5.5rem 2rem 2rem 2rem;
    h1.name {
      font-size: 2rem;
    }
    span.title {
      font-size: 1.5rem;
      display: block;
      text-align: center;
    }
    p.description {
      font-size: 1rem;
      width: 100%;
      text-align: center;
    }
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
  return (
    <>
      <AboutStyles id="about">
        <Img
          fluid={profile.image.asset.fluid}
          className="profile-pic"
          alt={profile.name}
        />
        <a href={Resume} className="resume-btn">
          View Resume
        </a>
        <h1 className="name">
          {profile.name}, <span className="title">{profile.title}</span>
        </h1>
        <p className="sub-name">{profile.position}</p>
        <p className="description">{profile.description}</p>
        <div className="container">
          {/* <div className="logos"> */}
          {logoList.map((logo) => (
            <SingleLogo key={logo._id} logo={logo} />
          ))}
          {/* </div> */}
        </div>
      </AboutStyles>
    </>
  );
};

export default AboutPage;
