import * as React from "react";
import TimelineItem, { TimelineItemProps } from "../components/TimelineItem";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const githubDescription = (
  <div>
    Increased self-help for users with any kind of problem on GitHub as part of
    the Digital Customer Success team.
    <br></br> <br></br>•{" "}
    <a
      href="https://github.blog/changelog/2024-02-09-copilot-in-github-support-ga"
      target="_blank"
    >
      Developed Copilot in GitHub Support
    </a>
    , a GPT-4 based large language model assistant automatically deflecting
    hundreds of support tickets each week.
    <br></br>• Automating Virtual Support with ML & AI
    <br></br>• Implementing Intelligent Search with Natural Language Processing
  </div>
);
const jobs: TimelineItemProps[] = [
  {
    title: `2024
GitHub
Software Engineer III`,
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
      left: 18,
      type: "absolute",
      zIndex: 9,
    },
    description: githubDescription,
  },
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
      top: 33,
      left: 48,
      type: "absolute",
      zIndex: 8,
    },
    description: githubDescription,
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
      top: 41,
      left: 13,
      type: "absolute",
      zIndex: 7,
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
      top: 50,
      left: 47,
      type: "absolute",
      zIndex: 6,
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
      top: 62,
      left: 14,
      type: "absolute",
      zIndex: 5,
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
      top: 73,
      left: 57,
      type: "absolute",
      zIndex: 4,
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
      top: 81,
      left: 12,
      type: "absolute",
      zIndex: 3,
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
      top: 94,
      left: 56,
      type: "absolute",
      zIndex: 2,
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
      top: 108,
      left: 20,
      type: "absolute",
      zIndex: 1,
    },
  },
];

const TimelineItems = styled.div`
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 5%;
    margin-bottom: 5%;
    height: 90%;
    position: relative;
  }
`;

export function ProfessionalTimeline() {
  return (
    <div
      style={{
        position: "relative",
        maxWidth: 996,
        height: "1200px",
        width: "100%",
      }}
    >
      <StaticImage
        src="../images/river.png"
        alt="River Image"
        placeholder="blurred"
        style={{
          position: "absolute",
          minHeight: "100%",
        }}
      ></StaticImage>
      <TimelineItems>
        {jobs.map((job) => (
          <TimelineItem
            key={job.title}
            title={job.title}
            width={job.width}
            description={job.description}
            imageComponent={job.imageComponent}
            position={job.position}
          ></TimelineItem>
        ))}
      </TimelineItems>
    </div>
  );
}
