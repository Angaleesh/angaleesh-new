import React from "react";

const Header = () => {
  return (
    <header id="about">
      <div className="flex justify-end gap-5">
        <a
          target="_blank"
          href="https://github.com/Angaleesh"
          className="hover:scale-105 text-xl cursor-pointer"
        >
          <i className="fi fi-brands-github"></i>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/_.angaleesh._/"
          className="hover:scale-105 text-xl cursor-pointer"
        >
          <i className="fi fi-brands-instagram"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/angaleesh/"
          className="hover:scale-105 text-xl cursor-pointer"
        >
          <i className="fi fi-brands-linkedin"></i>
        </a>
      </div>
      <div className="flex gap-2 mt-2 py-4">
        <h1 className="text-6xl max-lg:text-5xl max-md:text-3xl font-semibold">
          Angaleeshwara&nbsp;
          <span className=" stroke-text font-bold">Gandhi</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
