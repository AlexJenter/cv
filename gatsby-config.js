module.exports = {
  siteMetadata: {
    title: `CV – Alex Jenter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/`,
        name: "markdown",
      },
    },
    `gatsby-transformer-remark`,
  ],
}
