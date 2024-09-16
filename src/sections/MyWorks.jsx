import React, { useState } from "react";
import { projectGroup, projectList } from "../utils/info";
import { Link } from "react-router-dom";

const MyWorks = () => {
  const [group, setGroup] = useState("All");
  return (
    <div
      className="card w-full flex flex-col gap-5"
      data-aos="fade-up"
      id="my-works"
    >
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
              group === item
                ? `bg-black text-white border-none`
                : "hover:text-black"
            }`}
            key={i}
            onClick={() => setGroup(item)}
          >
            <p className="text-sm">{item}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {projectList.map(
          (item) =>
            item.group.includes(group) && (
              <a
                target="_blank"
                key={item.key}
                href={item?.link}
                className="card flex justify-between w-full group hover:shadow-ms relative max-lg:flex-col max-lg:gap-2"
              >
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold max-lg:flex justify-between">
                    {item.title}
                    <i className="ml-2 fi fi-rr-share-square group-hover:scale-105"></i>
                  </h2>
                  <div className="flex gap-2">
                    {item.type.map((i) => (
                      <span
                        className="py-1 px-2 border rounded-md text-sm"
                        key={i}
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col w-32">
                    {item.about.map((i) => (
                      <p className="text-sm"  key={i}>{i}</p>
                    ))}
                  </div>
                  <div className="flex gap-1 items-center mt-2">
                    {item.stack.map((i) => (
                      <img src={i} className="" width={15}  key={i}/>
                    ))}
                  </div>
                </div>
                <div className="absolute hidden group-hover:block shadow-sm top-0 left-[60%] hover:scale-125 duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={250}
                    height={100}
                    className="object-cover h-[120px]"
                  />
                </div>
              </a>
            )
        )}
      </div>
    </div>
  );
};

export default MyWorks;
