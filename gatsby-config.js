module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    description: `A Gatsby Site.`,
    siteUrl: `https://mygatsbysitemaster68117.gatsbyjs.io/`,
    image: `https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
  ]
}
