import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa6";

export default async function FooterSocial() {
  const links = [
    {
      title: "Facebook",
      icon: <FaFacebook className="h-full w-full" />,
      href: "https://www.facebook.com/Rashed4Abdullah",
      ariaLabel: "Visit Facebook profile",
    },
    {
      title: "Instagram",
      icon: <FaInstagram className="h-full w-full" />,
      href: "#",
      ariaLabel: "Visit Instagram profile",
    },
    {
      title: "Github",
      icon: <FaGithub className="h-full w-full" />,
      href: "https://github.com/RashedAbdullah",
      ariaLabel: "Visit Github profile",
    },
  ];

  return (
    <div>
      <h2 className="sr-only">Connect with me on social media</h2>
      <div className="flex justify-center items-center gap-8 text-2xl">
        {links.map((link) => (
          <div
            key={link.title}
            className="transform transition duration-500 hover:scale-125"
          >
            <a
              href={link.href}
              target="_blank"
              aria-label={link.ariaLabel}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
            >
              {link.icon}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
