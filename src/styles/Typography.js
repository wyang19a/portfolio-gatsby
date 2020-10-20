import { createGlobalStyle } from 'styled-components';
import font from '../assets/fonts/Megrim-Regular.ttf';

const Typography = createGlobalStyle`

@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/open-sans-v18-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Open Sans Regular'), local('OpenSans-Regular'),
       url('../fonts/open-sans-v18-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/open-sans-v18-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/open-sans-v18-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/open-sans-v18-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/open-sans-v18-latin-regular.svg#OpenSans') format('svg'); /* Legacy iOS */
}
  html {
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
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
