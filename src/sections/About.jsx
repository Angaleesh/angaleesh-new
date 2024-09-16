import React from "react";
import profile from "./../assets/img.jpg";
import { badges, major } from "../utils/info.jsx";
import { Link } from "react-router-dom";
import NumberCounter from "../utils/NumberCounter.jsx";
const About = () => {
  return (
    <div
      className="card w-full flex flex-col gap-5"
      data-aos="fade-up"
      id="about"
    >
      <div className="flex gap-10 items-center max-lg:flex-col">
        <div className="lg:w-1/3">
          <img
            src={profile}
            alt="profile"
            width={250}
            height={250}
            className="rounded-full aspect-square object-cover object-top"
          />
        </div>
        <div className="flex flex-col gap-5 lg:w-2/3">
          <h2
            className="title-heading relative w-full text-sm "
            data-backdrop-text="About&nbsp;Me"
          >
            About Me
          </h2>
          <h6 className="section-heading">
            Full Stack Developer. <br /> MERN
            <a
              href="https://drive.usercontent.google.com/u/0/uc?id=1dcEAza2GmYF56GQ8DnJngrfYLCJ915ot&export=download"
              className="text-sm ml-5 "
            >
              <span className="my-auto">Resume</span>
              <i className="fi fi-bs-cloud-download ml-1 rounded text-xl pt-2"></i>
            </a>
          </h6>
          <div className="flex gap-5 text-slate flex-wrap">
            {major.map(({ color, name, icon }, index) => (
              <div
                className={`flex justify-between major items-center gap-2 px-4 py-1 text-slate border-dotted border cursor-pointer rounded-full`}
                style={{ "--hover-color": color }}
                key={index}
              >
                <style jsx="true">{`
                  .major:hover {
                    color: var(--hover-color);
                  }
                `}</style>
                {icon}
                <p>{name}</p>
              </div>
            ))}
          </div>
          <p className="section content">
            Aspiring developer fueled by passion, eager to contribute and thrive
            in dynamic coding landscapes. Excited to embrace challenges,
            innovate, and excel in the dynamic realm of software development.
          </p>
        </div>
      </div>
      <div className="flex w-full gap-20 p-5  flex-wrap">
        {badges.map((item, index) => (
          <div className="h-fit flex gap-2" key={index}>
            <p className="stroke-text text-5xl ">
              <NumberCounter endNumber={item.count} speed={100} />
            </p>
            <div className="flex flex-col justify-evenly">
              <p className="font-outfit text-lg leading-tight">{item.unit}</p>
              <p className="text-md font-outfit leading-tight">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
