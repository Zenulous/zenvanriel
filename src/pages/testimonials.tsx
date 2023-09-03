import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import ZenSays from "../components/ZenSays";
import { SEOHead } from "../components/SEOHead";

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  max-width: 100%;
  margin: 2.5%;
  background-color: #f9f9f9;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 10px solid;
    border-image-source: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpolyline points='0 0, 10 10, 20 0, 30 10, 40 0, 50 10, 60 0' stroke='%23000000' stroke-width='5' fill='none' /%3E%3C/svg%3E");
    border-image-slice: 1;
    border-image-width: 1;
    border-image-outset: 0;
    border-image-repeat: round;
    animation: squiggly-anim 20s linear infinite;
    box-sizing: border-box; /* Ensure the border is included in the element's total width and height */
  }

  @keyframes squiggly-anim {
    0% {
      border-image-source: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpolyline points='0 0, 10 10, 20 0, 30 10, 40 0, 50 10, 60 0' stroke='%23000000' stroke-width='5' fill='none' /%3E%3C/svg%3E");
    }
    50% {
      border-image-source: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpolyline points='0 10, 10 0, 20 10, 30 0, 40 10, 50 0, 60 10' stroke='%23000000' stroke-width='5' fill='none' /%3E%3C/svg%3E");
    }
    100% {
      border-image-source: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpolyline points='0 0, 10 10, 20 0, 30 10, 40 0, 50 10, 60 0' stroke='%23000000' stroke-width='5' fill='none' /%3E%3C/svg%3E");
    }
  }
`;
const TestimonialsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  text-justify: inter-word;
  margin: 20px;
  padding: 20px;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  border-radius: 10px;
  background-color: #ffffff;
  width: 380px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TestimonialAuthor = styled.h4`
  text-align: center;
`;

export default function Testimonials() {
  return (
    <Layout>
      <ZenSays
        content={
          <div>
            These are some of the testimonials I've received throughout my
            professional career. They reflect the impact I've had and the
            relationships I've built.
          </div>
        }
      ></ZenSays>
      <TestimonialContainer>
        <h2>Testimonials</h2>
        <TestimonialsRow>
          <TestimonialCard>
            <StaticImage
              src="../images/testimonials/fabian.png"
              alt="Fabian Klein Schiphorst"
              placeholder="blurred"
              width={75}
              quality={100}
              style={{ borderRadius: "25px" }}
            />
            <TestimonialAuthor>
              Fabian Klein Schiphorst <br></br>Senior Manager Microsoft{" "}
            </TestimonialAuthor>
            <p>
              "Zen and I worked for one year together. He really impressed me,
              and, in the future, I will rehire him within a second. His wide
              knowledge of Cloud solutions is something I only saw with very
              senior architects. He worked in core infrastructure solutions,
              data, and ML solutions and -his passion- Cloud Native
              Applications. Next to that he also impressed me with his
              personality. His communication is extraordinarily strong. Both
              with customers and internally. If needed he will speak up and
              challenge the people, he works with. And he is the most certified
              professional I know 😊"
            </p>
          </TestimonialCard>
          <TestimonialCard>
            <StaticImage
              src="../images/testimonials/dennis.png"
              alt="Dennis Mulder"
              placeholder="blurred"
              width={75}
              quality={100}
              style={{ borderRadius: "25px" }}
            />
            <TestimonialAuthor>
              Dennis Mulder <br></br> CTO Microsoft Netherlands
            </TestimonialAuthor>
            <p>
              "Zen has amazed me. He joined Microsoft as an intern in September
              2019 and I didn't regret him joining Microsoft at all and extended
              his internship to last almost a year! As a matter of fact I would
              love to have Zen on my team on any team I am in. Zen is one of the
              best developers I have met, he figures out solutions to problems
              quickly, he can communicate his architecture well, always has
              great ideas and isn't afraid to speak up. Zen is also a great
              presenter/teacher, as during his internship he has taught others a
              lot. I am also amazed about his focus on certification, he has
              proven it is possible to learn quickly."
            </p>
          </TestimonialCard>
        </TestimonialsRow>
      </TestimonialContainer>
    </Layout>
  );
}

export const Head = () => <SEOHead />;
