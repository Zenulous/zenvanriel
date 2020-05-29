/* eslint-disable react/prop-types */
import React from "react";
import {graphql} from "gatsby";
import Metadata from "../components/Metadata";
import DefaultNavbar from "../components/DefaultNavbar";

export default function Template({data}) {
  const {markdownRemark} = data;
  const {frontmatter, html} = markdownRemark;
  return (
    <div>
      <Metadata
        title={"Zen van Riel - Home Page"}
        description={
          "This site serves as a small portfolio to post about some of my work."
        }
      />
      <DefaultNavbar />
      <div className="container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{__html: html}}
          />
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
