import React from "react";
import Title from "./Title";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-8xl mx-auto pt-20 px-6 lg:pt-24 mt-4 mb-20"
    >
      <Title
        text="Contact Me ☎️"
        className="flex flex-col items-center justify-center -rotate-6"
      />

      <p className="mt-8 text-xl text-gray-300 text-center lg:text-center">
        Please Contact me directly at{" "}
        <a
          className="underline font-bold mx-2"
          href="mailto:tanishsinghal510@gmail.com"
        >
          tanishsinghal510@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <div className="flex justify-center">
        <form className="mt-14 flex flex-col w-[50rem]">
          <input
            type="email"
            name="senderEmail"
            className="h-14 rounded-lg border-2 border-gray-600 mb-3 p-4 w-full"
            required
            maxLength={500}
            placeholder="Enter you email here"
          />
          <textarea
            name="senderMessage"
            className="h-52 rounded-lg border-2 border-gray-600 p-4 mb-3 w-full"
            required
            maxLength={500}
            placeholder="Enter your message here"
          />
          <button
            type="submit"
            className="flex justify-center items-center gap-2 font-bold h-[3rem] w-[8rem] bg-indigo-500 text-white rounded-full outline-none"
          >
            Submit <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
