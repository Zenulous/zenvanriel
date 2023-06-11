import React, { ReactNode } from "react";
import styled from "styled-components";

const TimelineItemContainer = styled.div<Pick<TimelineItemProps, "position">>`
  position: relative;
  z-index: 1;
  width: 403px;
  height: 141px;
  top: ${(props) => props.position.top || 0}px;
  left: ${(props) => props.position.left || 0}px;
  background-blend-mode: color-dodge, normal;
  backdrop-filter: blur(25px);
  border-radius: 31px;
`;

type TimelineItemProps = {
  title: string;
  description: string;
  imageComponent: ReactNode;
  position: {
    top: number;
    left: number;
  };
};

const TimelineItemContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  justify-content: center;
  align-items: center;
`;

const TimelineImage = styled.div`
  width: 100px;
`;

const TimelineItemText = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 5%;
  flex-direction: column;
  justify-content: space-around;
`;

export default function TimelineItem({
  title,
  description,
  imageComponent,
  position,
}: TimelineItemProps): JSX.Element {
  return (
    <TimelineItemContainer position={position}>
      <TimelineItemContent>
        <TimelineImage>{imageComponent}</TimelineImage>
        <TimelineItemText>
          <div>
            <b>{title}</b>
          </div>
          <div>{description}</div>
        </TimelineItemText>
      </TimelineItemContent>
    </TimelineItemContainer>
  );
}
