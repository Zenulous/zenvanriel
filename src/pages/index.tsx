import * as React from "react";
import type { PageProps } from "gatsby";
import { SEO } from "../components/seo";
import TimelineItem, { TimelineItemProps } from "../components/TimelineItem";
import { StaticImage } from "gatsby-plugin-image";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const jobs: TimelineItemProps[] = [
  {
    title: `2023
GitHub
Software Engineer II`,
    imageComponent: (
      <StaticImage
        src="../images/githubIcon.svg"
        alt="GitHub Icon"
        placeholder="blurred"
        width={50}
        height={50}
      />
    ),
    width: 300,
    position: {
      top: 25,
      left: 48,
    },
    description: `• Developed Support Copilot: Increased self-help for users with any kind of problem on GitHub

    • Automating Virtual Support with ML & AI

    • Implementing Intelligent Search with Natural Language Processing
    `,
  },
  {
    title: `2022
    Beyond Blue
    Azure DevOps Engineer`,
    imageComponent: (
      <StaticImage
        src="../images/beyondBlue.png"
        alt="Beyond Blue Icon"
        placeholder="blurred"
        width={50}
        height={50}
      />
    ),
    width: 300,
    position: {
      top: 31,
      left: 13,
    },
    description: `•  Developed, delivered and maintained cloud-native Kubernetes environments

    • Azure Engineering with a focus on DevOps for De Nederlandsche Bank
    `,
  },
  {
    title: `2022
    SkillScape
    Co-founder`,
    imageComponent: (
      <div style={{ height: "40px", width: "24px", margin: "auto" }}>
        <StaticImage
          src="../images/skillscape.png"
          alt="SkillScape Icon"
          placeholder="blurred"
          width={48}
          height={80}
        />
      </div>
    ),
    width: 250,
    position: {
      top: 40,
      left: 47,
    },
    description: (
      <div>
        Connect employees through internal learning opportunities on Microsoft
        Teams.<br></br>
        <br></br>
        <a href="https://skillscape.app" target="_blank">
          SkillScape
        </a>{" "}
        helps employees gain new skills, enrich their network, and get work done
        faster.
      </div>
    ),
  },
  {
    title: `2021
    Microsoft
    Customer Engineer`,
    description: `• Wrote TypeScript & Python code to advance enterprise customers towards cloud-native solutions on Azure

      • Collaborated with 50+ customers across software development, DevOps and cloud architecture, including:
      - Financial Sector (ABN Amro, Rabobank, Handelsbanken)
      - Government (Ministry of Defense, municipalities)
      - Healthcare (Leiden University Medical Center)
      - Education (Eramus University)
      - Retail (Heineken)
      - Manufacturing (Philips, ASML)
      - Transport (ProRail, Maersk)
      - IT (Atos)

      `,
    width: 300,
    position: {
      top: 48,
      left: 12,
    },
    imageComponent: (
      <StaticImage
        src="../images/microsoft.svg"
        alt="Microsoft Icon"
        placeholder="blurred"
        width={50}
        height={50}
      />
    ),
  },
  {
    title: `2020
    Tilburg University
    AI Research Assistant
    `,
    imageComponent: (
      <StaticImage
        src="../images/wuggy.png"
        alt="Wuggy Icon"
        placeholder="blurred"
        width={40}
        height={45}
      />
    ),
    width: 300,
    position: {
      top: 57,
      left: 57,
    },
    description: (
      <div>
        Developed and delivered a new version of the Python based{" "}
        <a href="https://github.com/WuggyCode/wuggy" target="_blank">
          pseudoword generator Wuggy.
        </a>
      </div>
    ),
  },
  {
    title: `2020
    Tilburg University - BSc (Cum laude)
    Cognitive Science & Artificial Intelligence`,
    imageComponent: (
      <StaticImage
        src="../images/tilburgUniversity.png"
        alt="Tilburg University Icon"
        placeholder="blurred"
        width={50}
        height={50}
      />
    ),
    width: 400,
    position: {
      top: 64,
      left: 11,
    },
    description: (
      <div>
        Thesis{" "}
        <a
          href="https://github.com/Zenulous/luis-test-framework/blob/master/thesis/MLOps%20for%20Chatbots%20-%20Applying%20context%20free%20grammar%20to%20test%20the%20performance%20of%20intent%20recognition%20systems.pdf"
          target="_blank"
        >
          MLOps for Chatbots
        </a>{" "}
        - Applying context free grammar to test the performance of intent
        recognition systems
      </div>
    ),
  },
  {
    title: `2019
    Microsoft
    Cloud Solutions Architect Intern`,
    description: (
      <div>
        • Lead software engineer on the{" "}
        <a
          href="https://github.com/microsoft/microsoft-teams-brainy-bot"
          target="_blank"
        >
          Brainy project: a Microsoft Teams chatbot
        </a>
        <br></br>
        <br></br>• Cooperated with international enterprises to develop proofs
        of concept Azure solutions
      </div>
    ),
    imageComponent: (
      <StaticImage
        src="../images/microsoft.svg"
        alt="Microsoft Icon"
        placeholder="blurred"
        width={50}
        height={50}
      />
    ),
    width: 350,
    position: {
      top: 73,
      left: 56,
    },
  },
  {
    title: `2018
    CMNTY
    Junior Software Tester`,
    imageComponent: (
      <StaticImage
        src="../images/cmnty.png"
        alt="CMNTY Icon"
        placeholder="blurred"
        width={100}
        height={50}
      />
    ),
    width: 350,
    description: `• Provided a fully automated test suite written in JavaScript (Cypress)

      • Performed general QA testing for a web-based Community platform
      `,
    position: {
      top: 85,
      left: 18,
    },
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <div style={{ position: "relative", maxWidth: 996 }}>
        {jobs.map((job) => (
          <TimelineItem
            title={job.title}
            width={job.width}
            description={job.description}
            imageComponent={job.imageComponent}
            position={job.position}
          ></TimelineItem>
        ))}
        <StaticImage
          src="../images/river.png"
          alt="River Image"
          placeholder="blurred"
        />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
