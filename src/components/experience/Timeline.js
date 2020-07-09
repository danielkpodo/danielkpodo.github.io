import React from "react";
import PropTypes from "prop-types";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = (props) => {
  const {
    title,
    description,
    icon,
    iconBg,
    date,
    tagline,
    position
  } = props.experiences;
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className={`vertical-timeline-element--${tagline}`}
        date={date}
        iconStyle={{ background: `${iconBg}`, color: "#fff" }}
        dateClassName="date"
        icon={icon}
        position={position}
      >
        <h5 className="vertical-timeline-element-title">{title}</h5>
        <p className="timeline-description">{description}</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

Timeline.propTypes = {
  experiences: PropTypes.object.isRequired
};

export default Timeline;
