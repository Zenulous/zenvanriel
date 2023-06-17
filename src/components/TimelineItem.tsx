import React, { ReactNode, useState } from "react";
import styled from "styled-components";

const TimelineItemContainer = styled.div<
  Pick<TimelineItemProps, "position" | "width">
>`
  position: ${(props) => props.position.type};
  z-index: ${(props) => props.position.zIndex};
  width: ${(props) => props.width || 0}px;
  max-width: 95vw;
  height: 75px;
  top: ${(props) => props.position.top}%;
  left: ${(props) => props.position.left}%;
  background-blend-mode: color-dodge, normal;
  backdrop-filter: blur(70px);
  border-radius: 31px;
  @media (max-width: 900px) {
    top: 0;
    left: 0;
    position: relative;
    width: 450px;
  }
`;

const DescriptionPopup = styled.div<
  Pick<TimelineItemProps, "position" | "width">
>`
  position: absolute;
  display: none;
  z-index: ${(props) => props.position.zIndex};
  width: ${(props) => props.width + 75 || 0}px;
  margin-top: 65px;
  min-width: 200px;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  color: white;
  max-width: 100%;
  word-wrap: break-word;
  white-space: pre-line;
`;

export interface TimelineItemProps {
  title: string;
  description: string | ReactNode;
  imageComponent: ReactNode;
  width: number;
  position: {
    top: number;
    left: number;
    type: string;
    zIndex: number;
  };
}

const TimelineItemContent = styled.div`
  color: white;
  display: flex;
  height: 100%;
  width: 100%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  justify-content: center;
  align-items: center;
`;

const TimelineImage = styled.div`
  margin-left: 10px;
  max-height: 50px;
  width: 40px;
  @media (max-width: 400px) {
    margin-left: 5px;
    max-height: 50px;
    width: 20px;
  }
`;

const TimelineItemText = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 5%;
  flex-direction: column;
  white-space: pre-line;
  line-height: 20px;
`;

export default function TimelineItem({
  title,
  description,
  imageComponent,
  width,
  position,
}: TimelineItemProps): JSX.Element {
  const descriptionRef = React.useRef<HTMLDivElement>(null);
  return (
    <div>
      <TimelineItemContainer
        position={position}
        width={width}
        onMouseOver={(e) => {
          if (descriptionRef.current) {
            descriptionRef.current.style.display = "block";
          }
        }}
        onMouseOut={(e) => {
          if (descriptionRef.current) {
            descriptionRef.current.style.display = "none";
          }
        }}
      >
        <DescriptionPopup
          ref={descriptionRef}
          position={position}
          width={width}
        >
          <div style={{ padding: "8px" }}>{description}</div>
        </DescriptionPopup>

        <TimelineItemContent>
          <TimelineImage>{imageComponent}</TimelineImage>
          <TimelineItemText>{title}</TimelineItemText>
        </TimelineItemContent>
      </TimelineItemContainer>
    </div>
  );
}
