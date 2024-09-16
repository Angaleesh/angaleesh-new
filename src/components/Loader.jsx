import React, { useState } from "react";

const Loader = () => {
  const [shown, setShown] = useState(false);
  const [shown2, setShown2] = useState(false);
  setTimeout(() => setShown(true), 1000);
  setTimeout(() => setShown2(true), 2800);
  return (
    <section className="bg-coreblack relative w-screen h-screen flex justify-center items-center text-white">
      <div className="h-fit overflow-hidden flex justify-center items-center">
        <div
          className={`flex gap-5 h-16 overflow-hidden animate-fadeOut delay-[1s] duration-[1s] ${
            shown && `-translate-y-full`
          }`}
        >
          <p
            className={`text-4xl max-md:text-xl font-extralight animate-fadeIn1 `}
          >
            Peeoniring
          </p>
          <p className={`text-4xl max-md:text-xl animate-fadeIn2 delay-1000`}>
            Creative
          </p>
          <p
            className={`text-4xl max-md:text-xl animate-fadeIn3 delay-1500 font-extralight`}
          >
            Excellence
          </p>
        </div>
      </div>
      <div className="absolute flex w-full h-full justify-center items-center">
        <div className="h-48 overflow-hidden  flex justify-center items-center">
          <div
            className={`relative w-fit h-fit p-3 ${
              !shown2 && `translate-y-[500px]`
            }`}
          >
            {shown2 && (
              <>
                <p className="text-2xl font-medium tracking-wide animate-boxText">Angaleesh.com</p>
                <span className="absolute w-[135%] h-full top-0 left-0 bg-orange-50 animate-box scale-0"></span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
