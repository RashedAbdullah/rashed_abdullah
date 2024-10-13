import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub } from "@tabler/icons-react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";


export default async function FooterSocial() {

  const links = [
    {
      title: "Facebook",
      icon: <FaFacebook className="h-full w-full" />,
      href: "https://www.facebook.com/Rashed4Abdullah",
      ariaLabel: `Visit Facabook profile`, // Added aria-label for accessibility
    },
    {
      title: "Instagram",
      icon: <FaInstagram className="h-full w-full" />,
      href: "#", // Update with a valid Instagram link
      ariaLabel: `Visit Instagram profile`, // Added aria-label for accessibility
    },
    {
      title: "Github",
      icon: <IconBrandGithub className="h-full w-full" />,
      href: "https://github.com/RashedAbdullah",
      ariaLabel: `Visit Github profile`, // Added aria-label for accessibility
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
