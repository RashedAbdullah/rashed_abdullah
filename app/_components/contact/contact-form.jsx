import nodemailer from "nodemailer";
import { FiSend } from "react-icons/fi";

const ContactForm = async () => {
  const handleContactor = async (evet) => {
    "use server";

    const name = evet.get("name");
    const email = evet.get("email");
    const message = evet.get("message");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.GMAIL_USER,
        subject: `Message from ${name}`,
        text: message,
      });

      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  };
  return (
    <form
      method="POST"
      action={handleContactor}
      className="flex flex-col gap-14 col-span-8"
    >
      <div className="flex flex-col md:grid grid-cols-8 justify-center gap-14">
        <div className="col-span-4" >
          <p className="text-deepAqua dark:text-aqua">Your Name*</p>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="bg-transparent w-full outline-none border-b border-deepAqua dark:border-aqua py-1"
            />
          </div>
        </div>

        <div className="col-span-4" >
          <p className="text-deepAqua dark:text-aqua">Your Email*</p>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="bg-transparent w-full outline-none border-b border-deepAqua dark:border-aqua py-1"
            />
          </div>
        </div>
      </div>

      <div>
        <div >
          <p className="text-deepAqua dark:text-aqua">Your message*</p>
          <div>
            <input
              type="text"
              name="message"
              placeholder="Enter your needs"
              className="bg-transparent w-full outline-none border-b border-deepAqua dark:border-aqua py-1"
            />
          </div>
        </div>
      </div>
      <div

        className="flex justify-center items-center"
      >
        <button className="bg-deepAqua dark:bg-aqua text-white dark:text-deepBlack py-3 px-8 rounded-full flex justify-center items-center gap-3">
          Send Message <FiSend />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
