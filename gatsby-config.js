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
    // The problem here is that GraphQL requires that you specify the field names you want, rather than just returning
    // what's in the object. Leaving this here commented out as a reminder that this doesn't work :(
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
