
import { FaFacebook } from "react-icons/fa";
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
        href="https://www.facebook.com/Rashed4Abdullah"
        className="flex justify-center items-center gap-1 hover:text-aqua2 transition duration-300"
        aria-label={`Visit Facebook profile`}
      >
        <FaFacebook /> <span>Facebook</span>
      </a>
    </nav>
  );
};

export default SocialLinks;
