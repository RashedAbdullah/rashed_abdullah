import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub } from "@tabler/icons-react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

export default function FooterSocial() {
  const links = [
    {
      title: "Facebook",
      icon: <FaFacebook className="h-full w-full text-neutral-500" />,
      href: "https://www.facebook.com/Rashed4Abdullah",
    },

    {
      title: "Instagram",
      icon: <FaInstagram className="h-full w-full text-neutral-500" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500" />,
      href: "https://github.com/RashedAbdullah",
    },
  ];
  return (
    <FloatingDock
      // only for demo, remove for production
      mobileClassName="translate-y-20"
      items={links}
    />
  );
}
