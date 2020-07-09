import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GoRepoForked } from "react-icons/go";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="section-header center-align">
        <h2> Experience </h2>
        <hr className="rule" />
        <p>The timeline illustrates my education & developer training</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col m12">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2011 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                dateClassName="date-timeline"
                icon={<GoRepoForked />}
              >
                <h5 className="vertical-timeline-element-title">
                  Creative Director
                </h5>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<GoRepoForked />}
              >
                <h5 className="vertical-timeline-element-title">
                  Art Director
                </h5>
                <p>
                  Creative Direction, User Experience, Visual Design, SEO,
                  Online Marketing
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
