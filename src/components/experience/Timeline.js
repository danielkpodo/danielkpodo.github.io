import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";

const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        dateClassName="date"
        icon={<MdSchool />}
      >
        <h5 className="vertical-timeline-element-title">Creative Director</h5>
        <p className="timeline-description">
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
