import React from "react";
import { EducationDetails, ExperienceDetails } from "../utils/info";

const Resume = () => {
  return (
    <div
      className="card w-full flex flex-col gap-5"
      data-aos="fade-up"
      id="resume"
    >
      <h2
        className="title-heading relative w-full text-sm "
        data-backdrop-text="Resume"
      >
        Resume
      </h2>
      <h5 className="section-heading">Education & Experience</h5>
      <p className="section-content max-w-[600px]">
        My journey has equipped me with a diverse skill set, ranging from
        front-end development to server-side solutions, and I'm excited to
        leverage these skills in meaningful ways.
      </p>
      <div className="flex gap-10 flex-wrap">
        <div className="flex flex-col gap-5">
          <i className="fi fi-rr-graduation-cap text-3xl"></i>
          {EducationDetails.map((item, i) => (
            <div className="flex flex-col gap-2" key={i}>
              <div
                className={`flex justify-between items-center gap-2 px-4 py-1 cursor-pointer border-dotted border rounded-full w-fit`}
              >
                <p className="text-sm">{item.year}</p>
              </div>
              <p className="text-lg font-semibold">{item.degree}</p>
              <p className="text-[15px] text-slate flex gap-2">
                <i className="fi fi-rr-at"></i>
                {item.university}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <i className="fi fi-rr-briefcase text-3xl"></i>

          {ExperienceDetails.map((item, i) => (
            <div className="flex flex-col gap-2" key={i}>
              <div
                className={`flex justify-between items-center gap-2 px-4 py-1 cursor-pointer border-dotted border rounded-full w-fit`}
                key={i}
              >
                <p className="text-sm">{item.year}</p>
              </div>
              <p className="text-lg font-semibold">{item.role}</p>
              <p className="text-[15px] text-slate flex gap-2">
                <i className="fi fi-rr-at"></i>
                {item.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
