import React from "react";

const Header = () => {
  return (
    <header id="about">
      <div className="flex justify-end gap-5">
        <i className="fi fi-brands-instagram"></i>
        <i className="fi fi-brands-linkedin"></i>
        <i className="fi fi-brands-facebook"></i>
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
