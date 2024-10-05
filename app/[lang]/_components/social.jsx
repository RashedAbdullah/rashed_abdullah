import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub } from "@tabler/icons-react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { getManageLangs } from "@/manage-langs/manage-langs";

export default async function FooterSocial({ lang = "en" }) {
  const langs = await getManageLangs(lang);
  const links = [
    {
      title: langs.facebook,
      icon: <FaFacebook className="h-full w-full text-neutral-500" />,
      href: "https://www.facebook.com/Rashed4Abdullah",
      ariaLabel: `Visit ${langs.facebook} profile`, // Added aria-label for accessibility
    },
    {
      title: langs.instagram,
      icon: <FaInstagram className="h-full w-full text-neutral-500" />,
      href: "#", // Update with a valid Instagram link
      ariaLabel: `Visit ${langs.instagram} profile`, // Added aria-label for accessibility
    },
    {
      title: langs.github,
      icon: <IconBrandGithub className="h-full w-full text-neutral-500" />,
      href: "https://github.com/RashedAbdullah",
      ariaLabel: `Visit ${langs.github} profile`, // Added aria-label for accessibility
    },
  ];

  return (
    <div>
      <h2 className="sr-only">Connect with me on social media</h2>{" "}
      {/* Screen reader only heading */}
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links.map(({ title, icon, href, ariaLabel }) => ({
          title,
          icon,
          href,
          ariaLabel,
        }))}
      />
    </div>
  );
}
