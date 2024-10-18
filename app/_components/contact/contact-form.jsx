import { FiSend } from "react-icons/fi";

const ContactForm = async () => {
  return (
    <form method="POST" action="" className="flex flex-col gap-14 col-span-8">
      <div className="flex flex-col md:grid grid-cols-8 justify-center gap-14">
        <div className="col-span-4">
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

        <div className="col-span-4">
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
        <div>
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
      <div className="flex justify-center items-center">
        <button className="bg-deepAqua dark:bg-aqua text-white dark:text-deepBlack py-3 px-8 rounded-full flex justify-center items-center gap-3">
          Send Message <FiSend />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
