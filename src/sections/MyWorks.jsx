import React, { useState } from "react";
import { projectGroup, projectList } from "../info";

const MyWorks = () => {
  const [group, setGroup] = useState("All");
  return (
    <div className="card w-full flex flex-col gap-5" id="my-works">
      <h2
        className="title-heading relative w-full text-sm "
        data-backdrop-text="My Works"
      >
        My Works
      </h2>
      <h5 className="section-heading">Projects Done</h5>
      <p className="section-content max-w-[600px]">
        My journey has equipped me with a diverse skill set, ranging from
        front-end development to server-side solutions, and I'm excited to
        leverage these skills in meaningful ways.
      </p>
      <div className="flex gap-3 flex-wrap text-slate">
        {projectGroup.map((item, i) => (
          <div
            className={`flex justify-between items-center gap-2 px-4 py-1 cursor-pointer border-dotted border rounded-full ${
              group === item && `bg-black text-white border-none`
            }`}
            key={i}
            onClick={() => setGroup(item)}
          >
            <p className="text-sm">{item}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {projectList.map((item) => (
          <div className="card flex justify-between w-full group hover:scale-y-105 relative">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">
                {item.title}
                <i className="ml-2 fi fi-rr-share-square"></i>
              </h2>
              <div className="flex gap-2">
                {item.type.map((i) => (
                  <span className="py-1 px-2 border rounded-md text-sm">
                    {i}
                  </span>
                ))}
              </div>
            </div>
            <div className="">
              <div className="flex flex-col w-32">
                {item.about.map((i) => (
                  <p className="text-sm">{i}</p>
                ))}
              </div>
              <div className="flex gap-1 items-center">
                {item.stack.map((i) => (
                  <img src={i} className="" width={20} />
                ))}
              </div>
            </div>
            <div className="absolute hidden group-hover:block shadow-sm top-0 left-[60%] hover:scale-125 duration-300">
              <img src={item.image} alt={item.title} width={250} height={100} className="object-cover h-[120px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
