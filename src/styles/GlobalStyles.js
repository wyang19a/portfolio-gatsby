import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* variables here */
    --medblue: #010048;
    --darkblue: #03002e;
    --navwidth: 150px;
    --bordercolor: #02006c;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  img {
    max-width: 100%; 
  }
  a {
    text-decoration: none;
  }
  .ggul {
    display: none;
  }
  li {
    list-style: none;
  }
`;

export default GlobalStyles;
