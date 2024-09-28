import React, { useRef, useState } from "react";
import { baseDetails } from "../utils/info";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [disable, setdisable] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const { email, name, subject, message, mobile } = form.current;
    if (
      [
        email?.value,
        name?.value,
        subject?.value,
        message?.value,
        mobile?.value,
      ].includes("")
    ) {
      toast.error("All fields are mandatory");
      return;
    }
    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email?.value)
    ) {
      toast.error("Invalid EMail format!");
      return;
    }
    setdisable(true);
    emailjs
      .sendForm("service_724ky46", "template_354dubg", form.current, {
        publicKey: "ArbAQSor37wNWjrV8",
      })
      .then(
        () => {
          toast.success("Thank you for reaching us!");
          form.current.email.value = "";
          form.current.name.value = "";
          form.current.mobile.value = "";
          form.current.subject.value = "";
          form.current.message.value = "";
          setdisable(false);
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error(
            "Unable to process Request request, Please try again some times"
          );
        }
      );
  };
  return (
    <div
      className="card w-full flex flex-col gap-5 animate-fadeIn1"
      data-aos="fade-up"
      id="contact"
    >
      <ToastContainer position="bottom-right" hideProgressBar={true} />
      <h2
        className="title-heading relative w-full text-sm "
        data-backdrop-text="Get In Touch"
      >
        Get In Touch
      </h2>
      <h5 className="section-heading">Let's Connect</h5>
      <p className="section-content max-w-[600px]">
        I’m always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Feel free to reach out to me
        through any of the following channels:
      </p>
      <div className="flex flex-wrap gap-2 text-slate   ">
        {baseDetails.map((item, index) => (
          <a
            href={item?.href}
            className="flex justify-between items-center gap-2 px-4 py-1 border-dotted border rounded-full hover:font-semibold hover:text-white hover:bg-black duration-300"
            key={index}
          >
            {item?.icon}
            <p className="text-sm leading-relaxed tracking-wide">
              {item?.value}
            </p>
          </a>
        ))}
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-10 mt-10"
      >
        <div className="flex w-full gap-5">
          <input
            name={"name"}
            placeholder="Name"
            key={"name"}
            className="w-1/2 input"
          />
          <input
            key={"mobile"}
            name={"mobile"}
            placeholder="Mobile"
            className="w-1/2 input"
          />
        </div>
        <input
          key={"email"}
          name={"email"}
          placeholder="E-mail"
          className="input"
        />
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
          className="input max-h-56 h-36 min-h-8"
        />
        <button
          disabled={disable}
          value={"submit"}
          type={"submit"}
          className={"w-40 h-10 button"}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
