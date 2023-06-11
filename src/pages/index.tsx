import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/seo";
import TimelineItem from "../components/TimelineItem";
import { StaticImage } from "gatsby-plugin-image";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const jobs = [
  {
    id: "1",
    title: "Software Engineer II",
    company: "GitHub",
    duration: "2023 - Present",
    description: [
      "Engineering within a team focused on Digital Customer Success.",
      "Increased self-help for users with any kind of problem on GitHub.",
      "Automatic Virtual Support.",
      "Intelligent Search with Natural Language Processing.",
    ],
  },
  {
    id: "2",
    title: "Azure Engineer",
    company: "Beyond Blue",
    duration: "2022 - 2023",
    description: [
      "Developed and delivered cloud-native Kubernetes environments.",
      "Azure Engineering with a focus on DevOps for De Nederlandsche Bank.",
    ],
  },
  {
    id: "3",
    title: "Customer Engineer",
    company: "Microsoft",
    duration: "2021 - 2022",
    description: [
      "Empowered customers to build cloud-native Azure solutions by collaborating with them.",
      "Wrote TypeScript, C# code to enable enterprise customers towards cloud-native solutions on Azure.",
      "Collaborated with 50+ customers across software development, DevOps and cloud architecture.",
      "Assessed and improved workloads running on Azure.",
    ],
  },
  {
    id: "4",
    title: "Cognitive Science & AI Research Assistant",
    company: "Tilburg University",
    duration: "2020 - 2021",
    description: [
      "Developed and delivered a new version of the Python based pseudoword generator Wuggy.",
    ],
  },
  {
    id: "5",
    title: "Cloud Solutions Architect Intern",
    company: "Microsoft",
    duration: "2019 - 2020",
    description: [
      "Cooperated with international enterprises to develop proofs of concept.",
      "Lead software engineer on the Brainy project: a Microsoft Teams chatbot.",
      "Enabled knowledge sharing by presenting internal and external projects.",
    ],
  },
  {
    id: "6",
    title: "Junior Software Tester",
    company: "CMNTY Corporation",
    duration: "2018 - 2019",
    description: [
      "Provided a fully automated test suite written in JavaScript (Cypress).",
      "Performed general QA testing for a web-based Community platform.",
    ],
  },
  {
    id: "7",
    title: "Employee",
    company: "McDonald's",
    duration: "2015",
    description: ["Employee of the month 2015."],
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <div>
        <TimelineItem
          title="test"
          description="this is a long description 123 123 123 123 123123 2 23 1123 312"
          imageComponent={
            <StaticImage
              src="../images/githubIcon.svg"
              alt="GitHub Icon"
              placeholder="blurred"
              width={100}
              height={100}
            />
          }
          position={{
            top: 490,
            left: 150,
          }}
        ></TimelineItem>
        <StaticImage
          src="../images/river.png"
          alt="River Image"
          placeholder="blurred"
          layout="fixed"
        />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
