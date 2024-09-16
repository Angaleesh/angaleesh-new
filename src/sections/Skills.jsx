import React, { useState } from "react";
import { skillGroup, skillicons } from "../utils/info";

const Skills = () => {
  const [group, setGroup] = useState("All");
  return (
    <div
      className="card w-full flex flex-col gap-5"
      id="portfolio"
      data-aos="fade-up"
      data-aos-duration="4500"
    >
      <h2
        className="title-heading relative w-full text-sm "
        data-backdrop-text="Portfolio"
      >
        Portfolio
      </h2>
      <h5 className="section-heading">Skill Proficiency</h5>
      <p className="section-content max-w-[600px]">
        My journey has equipped me with a diverse skill set, ranging from
        front-end development to server-side solutions, and I'm excited to
        leverage these skills in meaningful ways.
      </p>
      <div className="flex gap-3 flex-wrap text-slate">
        {skillGroup.map((item, i) => (
          <div
            className={`flex justify-between items-center gap-2 px-4 py-1 cursor-pointer border-dotted border rounded-full ${
              group === item
                ? `bg-black  text-white hover:text-white border-none`
                : "hover:text-black"
            }`}
            key={i}
            onClick={() => setGroup(item)}
          >
            <p className="text-sm">{item}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-5 flex-wrap ">
        {skillicons.map(
          (item) =>
            item.group.includes(group) && (
              <div
                className={`card flex  items-center gap-2 py-2 cursor-pointer hover:scale-110 h-16 `}
                key={item.key}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  width={25}
                  height={25}
                  className="object-contain"
                />
                <p className="text-sm">{item.name}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Skills;
