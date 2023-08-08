/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Alex Ocegueda Castro',
    description: 'Web Development Portfolio',
    copyright: 'Copyright 2023 Alex Ocegueda Castro',
    siteUrl: 'https://www.Ocegueda.dev', 
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
