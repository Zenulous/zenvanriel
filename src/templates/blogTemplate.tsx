/* eslint-disable react/prop-types */
import React from "react";
import {graphql} from "gatsby";
import Metadata from "../components/Metadata";
import DefaultNavbar from "../components/DefaultNavbar";

interface MarkdownRemark {
  frontmatter: {
    slug: string;
    title: string;
    description: string;
    imageUrl?: string;
  };
  html: string;
}
export default function Template({data}) {
  const markdownRemark = data.markdownRemark as MarkdownRemark;
  const blogTitle = markdownRemark.frontmatter.title.split("- ")[1];
  return (
    <div>
      <Metadata
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.frontmatter.description}
        imageUrl={markdownRemark.frontmatter.imageUrl}
      />
      <DefaultNavbar />
      <div className="container">
        <h1>{blogTitle}</h1>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{__html: markdownRemark.html}}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        slug
        title
        description
        imageUrl
      }
    }
  }
`;
