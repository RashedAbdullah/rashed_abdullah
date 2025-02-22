"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    const serviceID = "service_bo8oxl3";
    const templateID = "template_l7aby7b";
    const userID = "ktj3Jf0AR-bisFerP";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormData({ name: "", email: "", message: "" });
        setSuccessMessage(
          "Thank you for your message! I will get back to you soon."
        );
      })
      .catch((err) => {
        console.error("FAILED...", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-14 col-span-8">
      <div className="flex flex-col md:grid grid-cols-8 justify-center gap-14">
        <div className="col-span-4">
          <p className="text-deepAqua dark:text-aqua">Name*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Write your name..."
            className="bg-transparent w-full outline-none border-b border-deepAqua dark:border-aqua py-1"
            required
          />
        </div>

        <div className="col-span-4">
          <p className="text-deepAqua dark:text-aqua">Email*</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Write your Email..."
            className="bg-transparent w-full outline-none border-b border-deepAqua dark:border-aqua py-1"
            required
          />
        </div>
      </div>

      <div>
        <p className="text-deepAqua dark:text-aqua">Message*</p>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write what you want..."
          className="bg-transparent w-full outline-none border-b border-deepAqua dark:border-aqua py-1"
          required
        />
      </div>

      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="bg-deepAqua dark:bg-aqua text-white dark:text-deepBlack py-3 px-8 rounded-full flex justify-center items-center gap-3"
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"} <FiSend />
        </button>
      </div>

      {successMessage && (
        <p className="text-green-500 text-center mt-4">{successMessage}</p>
      )}
    </form>
  );
};

export default ContactForm;
