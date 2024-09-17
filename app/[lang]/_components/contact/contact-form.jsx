import { getManageLangs } from "@/manage-langs/manage-langs";
import nodemailer from "nodemailer";
import { FiSend } from "react-icons/fi";

const ContactForm = async ({ lang = "en" }) => {
  const langs = await getManageLangs(lang);

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
        <div className="col-span-4" dir={lang === "ar" ? "rtl" : "ltr"}>
          <p className="text-aqua">{langs.yourname}*</p>
          <div>
            <input
              type="text"
              name="name"
              placeholder={langs.enterName}
              className="bg-transparent w-full outline-none border-b border-aqua py-1"
            />
          </div>
        </div>

        <div className="col-span-4" dir={lang === "ar" ? "rtl" : "ltr"}>
          <p className="text-aqua">{langs.youremail}*</p>
          <div>
            <input
              type="email"
              name="email"
              placeholder={langs.enterMail}
              className="bg-transparent w-full outline-none border-b border-aqua py-1"
            />
          </div>
        </div>
      </div>

      <div>
        <div dir={lang === "ar" ? "rtl" : "ltr"}>
          <p className="text-aqua">{langs.yourmessage}*</p>
          <div>
            <input
              type="text"
              name="message"
              placeholder={langs.enterNeed}
              className="bg-transparent w-full outline-none border-b border-aqua py-1"
            />
          </div>
        </div>
      </div>
      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="flex justify-center items-center"
      >
        <button className="bg-aqua text-deepBlack py-3 px-8 rounded-full flex justify-center items-center gap-3">
          {langs.sendMessage} <FiSend />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
