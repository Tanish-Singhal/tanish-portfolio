"use client";

import React, { useState } from "react";
import Title from "./Title";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event:any) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("entry.337976779", email);
    formData.append("entry.1566377012", message);

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSctLfjIcCbuQ8IMe3ske0PnZyrM7C6yZSCsSsY1qQi_lSrzbA/formResponse";

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        // Reset form fields after successful submission
        setEmail("");
        setMessage("");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  function handleEmailChange(event:any) {
    setEmail(event.target.value);
  }

  function handleMessageChange(event:any) {
    setMessage(event.target.value);
  }

  function handleEnterKeyPress(event:any) {
    if (event.key === "Enter" && event.currentTarget.tagName !== "TEXTAREA") {
      event.preventDefault();
      
      const newValue =
        message.substring(0, event.currentTarget.selectionStart) +
        "\n" +
        message.substring(event.currentTarget.selectionEnd);
      setMessage(newValue);
      
      const cursorPosition = event.currentTarget.selectionStart + 1;
      event.currentTarget.setSelectionRange(cursorPosition, cursorPosition);
    }
  }

  return (
    <section id="contact" className="max-w-8xl mx-auto pt-20 px-6 lg:pt-24 mt-4 mb-20">
      <Title text="Contact Me ☎️" className="flex flex-col items-center justify-center -rotate-6" />
      
      <p className="mt-8 text-xl text-gray-300 text-center lg:text-center">
        Please Contact me directly at{" "}
        <a className="underline font-bold mx-2" href="mailto:tanishsinghal510@gmail.com">
          tanishsinghal510@gmail.com
        </a>{" "}
        or through this form.
      </p>
      
      <div className="flex justify-center">
        <form className="mt-14 flex flex-col w-[50rem]" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="h-14 rounded-xl border-2 border-gray-600 mb-3 p-4 w-full"
            required
            maxLength={500}
            placeholder="Enter your email here"
          />
      
          <textarea
            value={message}
            onChange={handleMessageChange}
            onKeyDown={handleEnterKeyPress}
            className="h-52 rounded-xl border-2 border-gray-600 p-4 mb-3 w-full"
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
