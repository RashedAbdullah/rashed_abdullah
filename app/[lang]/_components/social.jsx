import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub } from "@tabler/icons-react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { getManageLangs } from "@/manage-langs/manage-langs";

export default async function FooterSocial({ lang }) {
  const langs = await getManageLangs(lang)
  const links = [
    {
      title: langs.facebook,
      icon: <FaFacebook className="h-full w-full text-neutral-500" />,
      href: "https://www.facebook.com/Rashed4Abdullah",
    },

    {
      title: langs.instagram,
      icon: <FaInstagram className="h-full w-full text-neutral-500" />,
      href: "#",
    },
    {
      title: langs.github,
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
