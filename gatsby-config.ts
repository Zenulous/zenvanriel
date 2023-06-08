import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Zen van Riel",
    siteUrl: "https://www.zenvanriel.ml",
    twitterUsername: "@zenulousx",
    description: "Zen van Riel's personal website",
    image: "static/icon.png",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Zen van Riel",
        short_name: "Zen van Riel",
        icon: "static/logo.png",
      },
    },
  ],
};

export default config;
