import React from "react";
import {RouteComponentProps} from "@reach/router";
import DefaultNavbar from "../components/DefaultNavbar";
import Metadata from "../components/Metadata";
import codingRepositories from "../data/codingRepositories";
import Card from "react-bootstrap/Card";
import IconButton from "@material-ui/core/IconButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

export default class CodingRepositories extends React.Component<
  RouteComponentProps
> {
  render() {
    return (
      <div>
        <Metadata
          title={"Zen van Riel - Coding Repositories"}
          description={
            "This site serves as a small portfolio to post about some of my work."
          }
        />
        <DefaultNavbar />
        <div className="container">
          <h1>Coding Repositories</h1>
          {codingRepositories.map(repository => (
            <Card key={repository.title}>
              <Card.Img variant="top" src={repository.imageUrl} />
              <Card.Body>
                <Card.Title>{repository.title}</Card.Title>
                <Card.Text>{repository.description}</Card.Text>
                <IconButton color="primary" href={repository.githubUrl}>
                  <FontAwesomeIcon
                    color="black"
                    icon={faGithub}
                  ></FontAwesomeIcon>
                </IconButton>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
