import React from "react";
import { sidebarContents } from "../info.jsx";
import { Link } from "react-scroll";

const Sidebar = () => {
  return (
    <aside className="max-lg:w-full">
      <div className="card sticky top-8 bg-coreblack p-8 flex lg:flex-col h-80 justify-between w-64 max-lg:w-full max-lg:h-16">
        {sidebarContents.map((item, index) => (
          <Link
            key={index}
            to={item.id}
            smooth={true}
            spy={true}
            activeClass="active-tab"
            href=""
            className={`nav-link flex justify-between items-center w-full text-gray text-md  `}
          >
            <p className="max-lg:hidden">{item.name}</p>
            <span
              className={` rounded m-[15px] relative `}
              data-content={`${item.name.split("")[0]}`}
            >
              <span className="lg:hidden">{item.name.split("")[0]}</span>
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
