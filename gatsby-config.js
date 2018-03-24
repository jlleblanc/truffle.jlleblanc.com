module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Truffle Reader",
        short_name: "Truffle",
        start_url: "/reader",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
      },
    }
    // ,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `truffles`,
    //     path: `${__dirname}/public/feed.json`,
    //   }
    // }
  ],
};
