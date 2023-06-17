import React, { ReactNode } from "react";
import styled from "styled-components";

const TimelineItemContainer = styled.div<
  Pick<TimelineItemProps, "position" | "width">
>`
  position: absolute;
  z-index: ${(props) => 1000 - props.position.top || 0};
  width: ${(props) => props.width || 0}px;
  height: 75px;
  top: ${(props) => props.position.top || 0}%;
  left: ${(props) => props.position.left || 0}%;
  background-blend-mode: color-dodge, normal;
  backdrop-filter: blur(300px);
  border-radius: 31px;
`;

const DescriptionPopup = styled.div<Pick<TimelineItemProps, "width">>`
  position: absolute;
  z-index: 4;
  width: ${(props) => props.width + 75 || 0}px;
  min-width: 200px;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  color: white;
  display: none;
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
  console.log(width);
  return (
    <TimelineItemContainer
      position={position}
      width={width}
      onMouseEnter={(e) => {
        (
          e.currentTarget.querySelector(DescriptionPopup) as HTMLElement
        ).style.display = "flex";
        (
          e.currentTarget.querySelector(TimelineItemContent) as HTMLElement
        ).style.display = "none";
      }}
      onMouseLeave={(e) => {
        (
          e.currentTarget.querySelector(DescriptionPopup) as HTMLElement
        ).style.display = "none";
        (
          e.currentTarget.querySelector(TimelineItemContent) as HTMLElement
        ).style.display = "flex";
      }}
    >
      <DescriptionPopup width={width}>
        <div style={{ padding: "8px" }}>{description}</div>
      </DescriptionPopup>
      <TimelineItemContent>
        <TimelineImage>{imageComponent}</TimelineImage>
        <TimelineItemText>{title}</TimelineItemText>
      </TimelineItemContent>
    </TimelineItemContainer>
  );
}
