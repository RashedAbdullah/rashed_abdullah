"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import emailjs from "emailjs-com";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_bo8oxl3";
    const templateID = "template_l7aby7b";
    const userID = "ktj3Jf0AR-bisFerP";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        toast.success("Message sent successfully!", {
          description: `Sent on: ${new Date().toLocaleString()}`,
        });
        console.log("SUCCESS!", response.status, response.text);
        setFormData({ name: "", email: "", message: "" }); // Clear form fields
      })
      .catch((err) => {
        toast.error("Failed to send message. Please try again.", {
          description: `Error: ${err.message}`,
        });
        console.error("FAILED...", err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-14 col-span-8">
      <div className="flex flex-col md:grid grid-cols-8 justify-center gap-14">
        <div className="col-span-4">
          <p className="text-deepAqua dark:text-aqua">Your Name*</p>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-transparent w-full outline-none border-b border-deepAqua dark:border-aqua py-1"
              required
            />
          </div>
        </div>

        <div className="col-span-4">
          <p className="text-deepAqua dark:text-aqua">Your Email*</p>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-transparent w-full outline-none border-b border-deepAqua dark:border-aqua py-1"
              required
            />
          </div>
        </div>
      </div>

      <div>
        <div>
          <p className="text-deepAqua dark:text-aqua">Your message*</p>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your needs"
              className="bg-transparent w-full outline-none border-b border-deepAqua dark:border-aqua py-1"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="bg-deepAqua dark:bg-aqua text-white dark:text-deepBlack py-3 px-8 rounded-full flex justify-center items-center gap-3"
        >
          Send Message <FiSend />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
