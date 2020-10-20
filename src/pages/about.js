import React from 'react';
import styled from 'styled-components';

const AboutStyles = styled.div`
  padding: 5.5rem;
  h1.name {
    font-size: 3.5rem;
  }
  span.title {
    font-size: 2rem;
  }
  p.sub-name {
    font-size: 1.5rem;
    text-align: left;
  }
  p.description {
    width: 70%;
  }
`;

const AboutPage = () => (
  <AboutStyles>
    <h1 className="name">
      Wootae A. Yang, <span className="title">MCSA</span>
    </h1>
    <p className="sub-name">Fullstack Developer</p>
    <p className="description">
      Driven, versatile software engineer with MCSA: SQL Database Development
      certifications and proficiency in modern Javascript full stack web
      development. Skilled in designing, developing, and debugging professional
      web applications, with tasks ranging from improving user experience of
      front end application to SQL Server database design, development and
      optimization.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
  </AboutStyles>
);

export default AboutPage;
