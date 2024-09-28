import React from "react";
import { serviceContent } from "../utils/info";

const Services = () => {
  return (
    <div
      className="card w-full flex flex-col gap-5"
      data-aos="fade-up"
      id="services"
    >
      <h2
        className="title-heading relative w-full text-sm "
        data-backdrop-text="Services"
      >
        Services
      </h2>
      <h5 className="section-heading">What I Do</h5>
      <p className="section-content max-w-[600px]">
        I offer a comprehensive range of fullstack development services,
        tailored to meet the specific needs of businesses and individuals. With
        a focus on creating scalable, secure and user-friendly solutions, I aim
        to bring your ideas to life through technology.
      </p>
      <div className="flex flex-col">
        {serviceContent.map((item, i) => (
          <div
            className="flex lg:gap-5 w-full border-dashed border-b-[1px] text-slate max-lg:flex-col py-5"
            key={i}
          >
            <p className="stroke-text text-5xl w-16">{item.count}</p>
            <div className="flex flex-col justify-center items-start text-coreblack w-32">
              {item.icon}
              <p className="uppercase text-coreblack text-sm">{item.title}</p>
            </div>
            <p className="text-slate text-sm w-full lg:w-3/5">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
