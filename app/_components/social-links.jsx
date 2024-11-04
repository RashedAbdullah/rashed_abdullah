import { FaLinkedin } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";

const SocialLinks = async () => {
  return (
    <nav className="flex gap-10">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/RashedAbdullah"
        className="flex justify-center items-center gap-1 hover:text-aqua2 transition duration-300"
        aria-label={`Visit Github profile`}
      >
        <GrGithub /> <span>Guthub</span>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/rashed4abdullah/"
        className="flex justify-center items-center gap-1 hover:text-aqua2 transition duration-300"
        aria-label={`Visit Linkedin profile`}
      >
        <FaLinkedin /> <span>Linkedin</span>
      </a>
    </nav>
  );
};

export default SocialLinks;
