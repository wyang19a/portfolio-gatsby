// import dotenv from 'dotenv';

// dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `Wootae`,
    description: `Portfolio to showcase my work`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'qdbd2apt',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
