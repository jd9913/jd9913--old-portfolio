import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimeLinePage = () => {
	return (
		<div>
			<VerticalTimeline>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
					date='2020 - present'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}>
					<h3 className='vertical-timeline-element-title'>
						EOC Technical Analyst
					</h3>
					<h4 className='vertical-timeline-element-subtitle'>Phoenix, AZ</h4>
					<p>WebEOC Administrator, Full Stack Developer</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}>
					<h3 className='vertical-timeline-element-title'>
						State Emergency Operations Officer
					</h3>
					<h4 className='vertical-timeline-element-subtitle'>Tacoma, WA</h4>
					<p>
						Alert and Warning Center for the WA State Emergency Operations
						Center
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}>
					<h3 className='vertical-timeline-element-title'>
						Emergency Mangaement Program
					</h3>
					<h4 className='vertical-timeline-element-subtitle'>
						Los Angeles, CA
					</h4>
					<p>User Experience, Visual Design</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}>
					<h3 className='vertical-timeline-element-title'>
						Consultant Instructor
					</h3>
					<h4 className='vertical-timeline-element-subtitle'>
						Department of Homeland Security, Center for Domestic Preparedness
					</h4>
					<p>Pandemic Planning and Preparedness</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}>
					<h3 className='vertical-timeline-element-title'>
						Emergency Management Program Specialist
					</h3>
					<h4 className='vertical-timeline-element-subtitle'>Online Course</h4>
					<p>Emergency Management for Healthcare Systems</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					date='2021'
					iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}>
					<h3 className='vertical-timeline-element-title'>
						University of Arizona Web Development Bootcamp
					</h3>
					<h4 className='vertical-timeline-element-subtitle'>Certification</h4>
					<p>Full Stack Web Development</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}>
					<h3 className='vertical-timeline-element-title'>
						Master of Science Emergency Management
					</h3>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}>
					<h3 className='vertical-timeline-element-title'>
						Master of Health Administration
					</h3>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}>
					<h3 className='vertical-timeline-element-title'>
						Bachelor of Science Business Administration
					</h3>
					<h4 className='vertical-timeline-element-subtitle'>
						Bachelor Degree
					</h4>
					<p>Concentration: Management Information Systems</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};

export default TimeLinePage;
