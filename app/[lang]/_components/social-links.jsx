import { FaFacebook } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
const SocialLinks = () => {
  return (
    <div className="hidden md:flex gap-10">
      <a
        target="_blank"
        href="https://github.com/RashedAbdullah"
        className="flex justify-center items-center gap-1 hover:text-aqua2 transition duration-300"
      >
        <GrGithub /> <span>Github</span>
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/Rashed4Abdullah"
        className="flex justify-center items-center gap-1 hover:text-aqua2 transition duration-300"
      >
        <FaFacebook /> <span>Facebook</span>
      </a>
    </div>
  );
};

export default SocialLinks;
