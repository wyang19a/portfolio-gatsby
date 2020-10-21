import React from 'react';
import styled from 'styled-components';

const PortfolioStyles = styled.div`
  padding: 5.5rem;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  overflow-y: hidden;

  .container {
    position: relative;
    width: 80%;
    height: 80vh;
    background: #222;
  }

  .container .clip {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    transition: 0.1s;
  }
  .container .clip.clip1 {
    background: red;
    /* background: url();
    background-size: cover; */
    clip-path: polygon(0 0, 39.5% 0, 0% 100%, 0% 100%);
  }
  .container .clip.clip2 {
    background: green;
    /* background: url();
    background-size: cover; */
    clip-path: polygon(40.5% 0, 64.5% 0, 34.5% 100%, 1% 100%);
  }
  .container .clip.clip3 {
    background: blue;
    /* background: url();
    background-size: cover; */
    clip-path: polygon(65.5% 0, 99% 0, 59.5% 100%, 35.5% 100%);
  }
  .container .clip.clip4 {
    background: yellow;
    /* background: url();
    background-size: cover; */
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 60.5% 100%);
  }
  /* .container .clip.clip1:hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    .clip2,
    .clip3,
    .clip4 {
      clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    }
  } */
  /* .container:hover {
    .clip {
      clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    }
  } */
  .container .clip:hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    z-index: 1;
  }
  .container .clip .content {
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 70%;
    padding: 20px;
    opacity: 0;
    transition: 0.5s;
  }
  .container .clip:hover .content {
    bottom: 0;
    opacity: 1;
  }
`;

const clickedButton = () => {
  console.log('clicked');
  // Show project details
};
clickedButton();
const PortfolioPage = () => (
  <PortfolioStyles>
    <div className="container">
      <div
        className="clip clip1"
        role="button"
        tabIndex={0}
        onKeyDown={clickedButton}
        onClick={clickedButton}
      >
        <div className="content">
          <h2>Post1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            natus nisi dolorem nam, quisquam possimus maxime recusandae amet
            odio qui!
          </p>
        </div>
      </div>
      <div className="clip clip2">
        <div className="content">
          <h2>Post2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            natus nisi dolorem nam, quisquam possimus maxime recusandae amet
            odio qui!
          </p>
        </div>
      </div>
      <div className="clip clip3">
        <div className="content">
          <h2>Post3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            natus nisi dolorem nam, quisquam possimus maxime recusandae amet
            odio qui!
          </p>
        </div>
      </div>
      <div className="clip clip4">
        <div className="content">
          <h2>Post4</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            natus nisi dolorem nam, quisquam possimus maxime recusandae amet
            odio qui!
          </p>
        </div>
      </div>
    </div>
  </PortfolioStyles>
);

export default PortfolioPage;
