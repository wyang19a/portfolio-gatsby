import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`


  html {
    font-family: Playfair Display, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  .center {
    text-align: center;
  }
`;

export default Typography;
