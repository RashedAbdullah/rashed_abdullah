import { getManageLangs } from "@/manage-langs/manage-langs";
import { FaFacebook } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";

const SocialLinks = async ({ lang = "en" }) => {
  const langs = await getManageLangs(lang);

  return (
    <nav className="flex gap-10">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/RashedAbdullah"
        className="flex justify-center items-center gap-1 hover:text-aqua2 transition duration-300"
        aria-label={`Visit ${langs.github} profile`}
      >
        <GrGithub /> <span>{langs.github}</span>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/Rashed4Abdullah"
        className="flex justify-center items-center gap-1 hover:text-aqua2 transition duration-300"
        aria-label={`Visit ${langs.facebook} profile`}
      >
        <FaFacebook /> <span>{langs.facebook}</span>
      </a>
    </nav>
  );
};

export default SocialLinks;
