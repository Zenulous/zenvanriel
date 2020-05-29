module.exports = {
  siteMetadata: {
    siteUrl: "https://zenvanriel.nl",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: "markdown-pages",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Zen van Riel",
        short_name: "Zen",
        icon: "src/images/favicon.png",
      },
    },
  ],
};
