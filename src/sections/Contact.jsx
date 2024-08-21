import React, { useRef, useState } from "react";
import { baseDetails } from "../info";

const Contact = () => {
  const [disable, setdisable] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setdisable(true);
    emailjs
      .sendForm("service_t6rraxd", "template_cyrtk5d", form.current, {
        publicKey: "vxbNfXya-aoj-t00U",
      })
      .then(
        () => {
          notification.success({ message: "Thanks for reaching us!" });
          setdisable(false);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <div className="card w-full flex flex-col gap-5" id="contact">
      <h2
        className="title-heading relative w-full text-sm "
        data-backdrop-text="Get In Touch"
      >
        Get In Touch
      </h2>
      <h5 className="section-heading">Let's Connect</h5>
      <p className="section-content max-w-[600px]">
        My journey has equipped me with a diverse skill set, ranging from
        front-end development to server-side solutions, and I'm excited to
        leverage these skills in meaningful ways.
      </p>
      <div className="flex flex-wrap gap-2 text-slate   ">
        {baseDetails.map((item, index) => (
          <div
            className="flex justify-between items-center gap-2 px-4 py-1 border-dotted border rounded-full"
            key={index}
          >
            {item?.icon}
            <p className="text-sm leading-relaxed tracking-wide">{item?.value}</p>
          </div>
        ))}
      </div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-10 mt-10">
        <div className="flex w-full gap-5">
          <input
            name={"from_name"}
            placeholder="Name"
            key={"name"}
            className="w-1/2 input"
          />
          <input
            key={"email"}
            name={"email"}
            placeholder="E-mail"
            className="w-1/2 input"
          />
        </div>
        <input type="text" hidden value={"Eyeguru Admin"} name="to_name" />
        <input
          key={"subject"}
          name={"subject"}
          placeholder="Subject"
          className="input"
        />
        <textarea
          key={"message"}
          name={"message"}
          placeholder="Message"
          className="input h-36"
        />
        <button
          value={"submit"}
          type={"submit"}
          className={"w-40 h-10 button"}
        >Submit</button>
      </form>
    </div>
  );
};

export default Contact;
