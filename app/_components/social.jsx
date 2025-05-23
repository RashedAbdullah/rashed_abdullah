import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";

export default function FooterSocial() {
  const links = [
    {
      title: "Youtube",
      icon: <FaYoutube className="h-full w-full" />,
      href: "https://www.youtube.com/@RashedAbdullahBD",
      ariaLabel: "Visit Facebook profile",
    },
    {
      title: "Facebook",
      icon: <FaFacebook className="h-full w-full" />,
      href: "https://www.facebook.com/Rashed4Abdullah",
      ariaLabel: "Visit Facebook profile",
    },
    {
      title: "Github",
      icon: <FaGithub className="h-full w-full" />,
      href: "https://github.com/RashedAbdullah",
      ariaLabel: "Visit Github profile",
    },
    {
      title: "Linkedin",
      icon: <FaLinkedin className="h-full w-full" />,
      href: "https://www.linkedin.com/in/rashed4abdullah/",
      ariaLabel: "Visit Linkedin profile",
    },
  ];

  return (
    <div>
      <h2 className="sr-only">Connect with me on social media</h2>
      <div className="flex items-center gap-8 text-2xl">
        {links.map((link) => (
          <div
            key={link.title}
            className="transform transition duration-500 hover:scale-125 border p-2 rounded-full h-10 w-10"
          >
            <a
              href={link.href}
              target="_blank"
              aria-label={link.ariaLabel}
              className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              {link.icon}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
