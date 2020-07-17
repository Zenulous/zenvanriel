import React from "react";
import DefaultNavbar from "../components/DefaultNavbar";
import Metadata from "../components/Metadata";
import {styled} from "styletron-react";
import {graphql, Link} from "gatsby";
import Card from "@material-ui/core/Card";
import {CardContent, Typography, CardActions, Button} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

const BlogCard = styled(Card, {marginTop: "25px"});
const BlogCardMedia = styled(CardMedia, {
  height: "250px",
  backgroundSize: "contain !important",
});
const BlogCardActions = styled(CardActions, {justifyContent: "center"});
export default class Home extends React.Component<{
  data: any;
}> {
  render() {
    return (
      <div>
        <Metadata
          title={"Zen van Riel - Blogs"}
          description={"A collection of blogs I've posted across the internet."}
        />
        <DefaultNavbar />
        <div className="container">
          <h1>Blogs</h1>
          {this.props.data.allMarkdownRemark.edges.map(edge => {
            return (
              <BlogCard key={edge.node.frontmatter.title}>
                <BlogCardMedia
                  image={edge.node.frontmatter.imageUrl}
                  title={edge.node.frontmatter.title.split("- ")[1]}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {edge.node.frontmatter.title.split("- ")[1]}
                  </Typography>
                  <p>{edge.node.excerpt}</p>
                  <p>Time to read: {edge.node.timeToRead} minutes</p>
                </CardContent>
                <BlogCardActions>
                  <Button variant="outlined" size="small" color="primary">
                    <Link to={edge.node.frontmatter.slug}>Read Blog</Link>
                  </Button>
                </BlogCardActions>
              </BlogCard>
            );
          })}
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(filter: {frontmatter: {slug: {glob: "/blogs/*"}}}) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            slug
            title
            imageUrl
          }
        }
      }
    }
  }
`;
