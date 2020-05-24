module.exports = {
  siteMetadata: {
    siteUrl: "https://zenvanriel.nl",
  },
  plugins: [
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
